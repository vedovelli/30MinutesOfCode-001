import { makeServer } from "../..//miragejs/server";
import { Card } from "./Card";

const server = makeServer({ environment: "test" });
const user = server.create("user");

export default {
  title: "Containers/Users/Card",
  component: Card,
};

const Template = (args) => (
  <div className="max-w-xl mx-auto">
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  user,
};
