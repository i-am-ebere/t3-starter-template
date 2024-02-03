import { Meta, StoryObj } from "@storybook/react";
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

export const WithError: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(/email/i), "user@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "password");
    await userEvent.click(canvas.getByRole("button", { name: /sign in/i }));
  },
};