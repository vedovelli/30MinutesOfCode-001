import { Products } from "./Products";
import { PRODUCT_QTY } from "./Products.constants";
import { getProducts } from "../../miragejs/api/products";

export default {
  title: "Features/Products",
  component: Products,
};

const Template = (args) => (
  <div className="container mx-auto">
    <Products {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  products: getProducts({ quantity: PRODUCT_QTY }),
};
