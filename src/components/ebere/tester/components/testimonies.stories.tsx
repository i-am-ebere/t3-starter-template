import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Testimonial from './testimonies';

const meta: Meta = {
  title: 'Components/Testimonial',
  component: Testimonial,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Testimonial {...args} />,
};