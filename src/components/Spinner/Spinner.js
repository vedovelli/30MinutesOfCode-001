import "./Spinner.css";
import colors from "tailwindcss/colors";

export const customColors = {
  blue: colors.blue[500],
  red: colors.red[500],
  green: colors.green[500],
  yellow: colors.yellow[500],
  orange: colors.orange[500],
};

export function Spinner({ message, variant }) {
  return (
    <div className="spinner-container">
      <div className="spinner-flex">
        <div
          style={{ borderColor: customColors[variant] }}
          data-testid="spinner"
          className="spinner-loader"
        ></div>
      </div>
      <div className="spinner-load-text">{message ?? "Loading..."}</div>
    </div>
  );
}
