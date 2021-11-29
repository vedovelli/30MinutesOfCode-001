import { Default, Green } from "./Spinner.stories";
import { screen, render } from "@testing-library/react";

describe("Components/Spinner", () => {
  it("should render the spinner with a default message", () => {
    render(<Default />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should render the spinner with a custom message", () => {
    render(<Green {...Green.args} />);
    expect(screen.getByText(/look ma: I'm green!/i)).toBeInTheDocument();
  });
});
