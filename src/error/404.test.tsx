import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./404";

test("renders 404 error", () => {
  render(<NotFound />);
  const bodyElement = screen.getByText(/404 - Page Not Found/i);
  expect(bodyElement).toBeInTheDocument();
});