import "../src/index.css";
import { globalDecorators } from "./decorators";

export const decorators = globalDecorators;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  mirage: {
    // automatically log requests to browser console https://miragejs.com/api/classes/server/#logging
    logging: true,
  }
};
