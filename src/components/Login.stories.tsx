import { type Meta, type StoryObj } from "@storybook/react";
import Login from "./Login";

const meta: Meta = {
  title: "Components/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
