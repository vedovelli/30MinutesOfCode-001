import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./Products";
import { rest } from "msw";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: "Containers/Products",
  component: Products,
};

const Template = (args) => {
  return (
    <QueryClientProvider client={client}>
      <div className="container mx-auto">
        <Products {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get("/api/products", (req, res, ctx) => {
      return res(
        ctx.json({
          products: [
            {
              productDetails: "http://reyna.org",
              imageUrl: "http://placeimg.com/640/480/cats",
              price: 5861,
              name: "Eloise Romaguera",
              id: "1",
            },
            {
              productDetails: "http://dakota.net",
              imageUrl: "http://placeimg.com/640/480/animals",
              price: 5664,
              name: "Mike Frami III",
              id: "2",
            },
            {
              productDetails: "https://ambrose.org",
              imageUrl: "http://placeimg.com/640/480/people",
              price: 6328,
              name: "Sheryl Carter",
              id: "3",
            },
          ],
        })
      );
    }),
  ],
};
