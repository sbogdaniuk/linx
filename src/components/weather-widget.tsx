import { useQuery } from 'react-query'
import { getCurrentWeather } from '../api'



interface Props {
  location: {
    latitude: number,
    longitude: number
  }
}

export function WeatherWidget({ location }: Props) {
  const { data, error, isLoading, refetch, errorUpdateCount } = useQuery({
    queryKey: ["WEATHER_INFO", location],
    queryFn: ({ signal }) =>
      getCurrentWeather(
        location!.latitude,
        location!.longitude,
        { signal },
      ),
    staleTime: 30_000,
    // refetchInterval: 30_000,
    keepPreviousData: true,
    enabled: !!location
  });

  function renderData() {
    if (!data) return null

    return (
      <div>
        <code className="whitespace-pre">
          {JSON.stringify(data, null, 2)}
        </code>
      </div>
    )
  }

  function renderError() {
    if (!error) return null;

    return (
      <div>
        Error
        {errorUpdateCount < 5 && (
          <button type="button" onClick={() => refetch()}>
            Refetch
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {renderError()}
      {renderData()}
    </div>
  );
}
