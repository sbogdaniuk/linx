import { useQuery } from "react-query";
import { HeaderToolbar } from "../components/header-toolbar";
import { Spinner } from "../components/spinner";
import { Percent } from "../components/percent";
import { Temperature } from "../components/temperature";
import { Distance } from "../components/distance";
import { FormatDate } from "../components/format-date";
import { getCurrentWeather } from "../api";
import { Alert } from "../components/alert";

interface Props {
  location: {
    latitude: number;
    longitude: number;
  };
}

export function Weather({ location }: Props) {
  const query = useQuery({
    queryKey: ["WEATHER_INFO", location],
    queryFn: ({ signal }) =>
      getCurrentWeather(location!.latitude, location!.longitude, { signal }),
    staleTime: 30_000,
    refetchInterval: 30_000,
    keepPreviousData: true,
    enabled: !!location,
  });

  const { data, error, isFetching, refetch, errorUpdateCount } = query;

  function renderLoader() {
    if (!isFetching) return null;

    if (data) {
      return (
        <HeaderToolbar>
          <Spinner />
        </HeaderToolbar>
      );
    }

    return (
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  function renderData() {
    if (!data) return null;

    return (
      <div>
        <div className="grow flex flex-col min-w-0 break-words rounded-md border border-gray-300 max-w-xs">
          <div className="p-3">
            <div className="mb-2 text-xl">{data.location.name}</div>
            <div>
              <div className="text-xs">
                {[data.location.region, data.location.country]
                  .filter(Boolean)
                  .join(", ")}
              </div>

              <div className="mt-3 flex items-center">
                {data.current.condition.text}
                <img
                  className="ml-1"
                  width={32}
                  height={32}
                  src={data.current.condition.icon}
                  alt={"condition icon"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-t border-t-gray-300">
            <div className="flex justify-between px-3 py-2 border-b border-b-gray-300">
              <div>Temperature</div>
              <Temperature value={data.current.temp_c} />
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-b-gray-300">
              <div>Feels like</div>
              <Temperature value={data.current.feelslike_c} />
            </div>
            <div className="flex justify-between px-3 py-2 border-b border-b-gray-300">
              <div>Humidity</div>
              <Percent value={data.current.humidity} />
            </div>
            <div className="flex justify-between px-3 py-2">
              <div>Wind</div>
              <Distance value={data.current.wind_kph} />
            </div>
          </div>
        </div>

        <span className="text-gray-500 text-xs my-4">
          API data last updated: {data.current.last_updated}
          <br />
          Last fetched at: <FormatDate date={Date.now()} />
          <br />
          <span
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
            onClick={() => refetch()}
          >
            Refresh
          </span>
        </span>
      </div>
    );
  }

  function renderError() {
    if (!error) return null;

    return (
      <Alert title={"Something went wrong"}>
        {errorUpdateCount < 5 && (
          <button
            className="block rounded-lg p-0 text-inherit transition"
            onClick={() => refetch()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        )}
      </Alert>
    );
  }

  return (
    <div>
      {renderLoader()}
      {renderError()}
      {renderData()}
    </div>
  );
}
