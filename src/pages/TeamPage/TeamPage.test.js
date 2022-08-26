import { render, fireEvent, screen } from "@testing-library/react";
import TeamPage from ".";

test("Page render", () => {
  render(<TeamPage />);
  expect(screen.getByTestId("team-page")).toBeTruthy();
});

test("Page title render", () => {
  render(<TeamPage />);
  expect(screen.getByTestId("page-title")).toBeTruthy();
});

test("Switching display modes", () => {
  render(<TeamPage />);
  const ListButton = screen.getByTestId("list-icon");
  const ListButtonClicked = fireEvent.click(ListButton);
  const ThumbnailButton = screen.getByTestId("thumbnail-icon");

  expect(ListButtonClicked).toBeTruthy();
  expect(ThumbnailButton).toBeTruthy();

  const ThumbnailButtonClicked = fireEvent.click(ThumbnailButton);

  expect(ThumbnailButtonClicked).toBeTruthy();
  expect(ListButton).toBeTruthy();
});
