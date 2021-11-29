import Products from "./Products";
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
    // customize when a request responds https://miragejs.com/docs/main-concepts/route-handlers/#timing
    timing: 0,
    // override route handlers for the story https://miragejs.com/docs/main-concepts/route-handlers/
    handlers: {
      get: {
        // arguments for Response https://miragejs.com/api/classes/response/
        '/products': [200, {}, {
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
        }], 
      },
    },
  }
};

export const Error = Template.bind({});
Error.parameters = {
  mirage: {
    handlers: {
      get: {
        '/products': 500,
      },
    },
  }
};

export const Loading = Template.bind({});
Loading.parameters = {
  mirage: {
    // customize when a request responds https://miragejs.com/docs/main-concepts/route-handlers/#timing
    timing: 50000,
    // override route handlers for the story https://miragejs.com/docs/main-concepts/route-handlers/
    handlers: {
      get: {
        '/products': 404,
      },
    },
  }
};