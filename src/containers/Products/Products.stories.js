import Products from "./Products";
import { makeServer } from "../../miragejs/server";

const server = makeServer({ environment: "development" });
const products = server.createList("product", 24);
server.shutdown();

export default {
  title: "Containers/Products",
  component: Products,
};

const Template = (args) => {
  return (
    <div className="container mx-auto">
      <Products {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  mirage: {
    timing: 0,
    handlers: {
      get: {
        "/products": [
          200,
          {},
          {
            products,
          },
        ],
      },
    },
  },
};

export const Error = Template.bind({});
Error.parameters = {
  mirage: {
    handlers: {
      get: {
        "/products": 500,
      },
    },
  },
};

export const Loading = Template.bind({});
Loading.parameters = {
  mirage: {
    timing: 50000,
    handlers: {
      get: {
        "/products": 404,
      },
    },
  },
};
