// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
 
import Button from './index';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    label: 'hola',
    buttonStyle: 'switch',
  },
};