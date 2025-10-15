import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const AllTheProviders = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const renderAsJSON = (children) =>
  renderer.create(<AllTheProviders>{children}</AllTheProviders>).toJSON();

export * from "@testing-library/react";

export { customRender as render, renderAsJSON };

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

export const axiosMock = new MockAdapter(axios);
