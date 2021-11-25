import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: "Please wait...",
};

export const Red = Template.bind({});
Red.args = {
  variant: "red",
  message: "Look Ma: I'm red!",
};

export const Blue = Template.bind({});
Blue.args = {
  variant: "blue",
  message: "Look Ma: I'm blue!",
};

export const Green = Template.bind({});
Green.args = {
  variant: "green",
  message: "Look Ma: I'm green!",
};

export const Orange = Template.bind({});
Orange.args = {
  variant: "orange",
  message: "Look Ma: I'm orange!",
};

// Should default to purple
export const Unknown = Template.bind({});
Unknown.args = {
  variant: "xxx",
  message: "Look Ma: I don't know which color I am!",
};
