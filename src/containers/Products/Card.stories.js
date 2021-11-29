import { Card } from "./Card";

export default {
  title: "Containers/Products/Card",
  component: Card,
};

const Template = (args) => (
  <div className="max-w-xl mx-auto">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  product: {
    productDetails: "http://reyna.org",
    imageUrl: "http://placeimg.com/640/480/cats",
    price: 5861,
    name: "Eloise Romaguera",
    id: "1",
  },
};
