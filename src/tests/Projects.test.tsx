import { render, screen } from "@testing-library/react";
import MainPage from "../components/MainPage";
import Projects from "../components/Projects";

describe("Test ProjectsPage", () => {
  test("Test button", () => {
    render(<Projects />);

    const linkElement = screen.getByText(/Поиск книг/i);
    expect(linkElement).toBeInTheDocument();
  });
});
