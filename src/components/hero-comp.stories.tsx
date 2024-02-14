import { Meta, StoryObj } from "@storybook/react";
import HomePageHeroSection from "~/components/hero-comp";

const meta: Meta = {
  title: "Components/HomePageHeroSection",
  component: HomePageHeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <HomePageHeroSection />,
};