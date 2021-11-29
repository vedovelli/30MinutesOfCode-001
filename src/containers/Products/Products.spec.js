import { makeServer } from "../../miragejs/server";
import { Default } from "./Products.stories";
import { render, screen, waitFor } from "@testing-library/react";

describe("Containers/Products", () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render Products", async () => {
    render(<Default {...Default.args} />);
    await waitFor(() => {
      expect(screen.getAllByTestId("product")).toHaveLength(25);
    });
  });
});
