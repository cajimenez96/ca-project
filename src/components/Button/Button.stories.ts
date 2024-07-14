// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
 
import Button from './index';
 
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  
};
 
export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    label: 'Boton',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Boton',
    type: 'secondary',
  },
};