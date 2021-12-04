import {
  Default,
  CustomMessage,
  Red,
  Blue,
  Green,
  Orange,
  Unknown,
} from "./Spinner.stories";
import { render, screen } from "@testing-library/react";
import { customColors } from "./Spinner";

describe("Components > Spinner", () => {
  it("should render a spinner with default state", () => {
    render(<Default />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("should render a spinner with custom message", () => {
    render(<CustomMessage {...CustomMessage.args} />);
    expect(screen.getByText(/Please wait.../i)).toBeInTheDocument();
  });

  describe("Variants", () => {
    const components = {
      Red: Red,
      Blue: Blue,
      Green: Green,
      Orange: Orange,
      Unknown: Unknown,
    };

    const testCases = [
      ["Red", customColors.red],
      ["Blue", customColors.blue],
      ["Green", customColors.green],
      ["Orange", customColors.orange],
      ["Unknown", customColors.unknown],
    ];

    it.each(testCases)(
      "Should render a %s Spinner with color %s",
      (variant, expected) => {
        const Component = components[variant];

        render(<Component {...Component.args} />);

        if (variant !== "Unknown") {
          expect(
            screen.getByText(`Look Ma: I'm ${variant.toLowerCase()}!`)
          ).toBeInTheDocument();
        } else {
          expect(
            screen.getByText(/Look Ma: I don't know which color I am!/i)
          ).toBeInTheDocument();
        }

        expect(screen.getByTestId("spinner")).toHaveStyle({
          "border-color": expected,
        });
      }
    );

    // it("should render a spinner with red variant", () => {
    //   render(<Component {...Red.args} />);
    //   expect(screen.getByTestId("spinner")).toHaveStyle({
    //     "border-color": customColors.red,
    //   });
    //   expect(screen.getByText(/Look Ma: I'm red!/i)).toBeInTheDocument();
    // });
  });
});
