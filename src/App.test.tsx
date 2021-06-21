import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home Screen body", () => {
  render(<App />);
  const bodyElement = screen.getByText(/Welcome To Terra-Store/i);
  expect(bodyElement).toBeInTheDocument();
});

test("renders AppBar with link and search.", () => {
  render(<App />);
  const titleElement = screen.getByText(/^Terra-Store$/i);
  expect(titleElement).toBeInTheDocument();
  const modulesLinkElement = screen.getByText(/^Modules$/i);
  expect(modulesLinkElement).toBeInTheDocument();
  const providersLinkElement = screen.getByText(/^Providers$/i);
  expect(providersLinkElement).toBeInTheDocument();
});
