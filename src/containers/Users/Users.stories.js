import Users from "./Users";
import { makeServer } from "../../miragejs/server";

const server = makeServer({ environment: "test" });
const users = server.createList("user", 25);
server.shutdown();

export default {
  title: "Containers/Users",
  component: Users,
};

const Template = (args) => (
  <div className="container mx-auto">
    <Users {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  users,
};
