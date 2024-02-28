import { renderApp, screen, within } from "../../renderApp";

test("renders learn react link", async () => {
  renderApp();

  screen.getByRole("heading", { name: /dashboard/i });

  screen.getByText(/loading.../i);

  await screen.findByText("Kyiv");

  const infoList = screen.getByRole("list", { name: "weather info" });
  const infoItems = within(infoList).getAllByRole("listitem");

  const infoTexts = Array.from(infoItems).map((node) => node.textContent);

  expect(infoTexts).toEqual([
    "Temperature7°C",
    "Feels like4°C",
    "Humidity47%",
    "Wind18 km",
  ]);

  screen.getByText("API data last updated: 2024-02-28 15:15");
});
