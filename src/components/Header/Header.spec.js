import { Default } from "./Header.stories";
import { screen, render } from "@testing-library/react";

describe("Components/Header", () => {
  it("should render the default header with custom content", () => {
    render(<Default>App Header</Default>);
    expect(screen.getByText(/App Header/i)).toBeInTheDocument();
  });
});
