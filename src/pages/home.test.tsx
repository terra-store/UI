import { render, screen } from "@testing-library/react";
import Home from "./home";

test("renders Home Screen body", () => {
  render(<Home />);
  const bodyElement = screen.getByText(/Welcome To Terra-Store/i);
  expect(bodyElement).toBeInTheDocument();
});