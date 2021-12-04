import { Card } from "./Card";
import { getProduct } from "../../miragejs/api/products";

export default {
  title: "Features/Products/Card",
  component: Card,
};

const Template = (args) => (
  <div className="mx-auto max-w-xl">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  product: getProduct(),
};
