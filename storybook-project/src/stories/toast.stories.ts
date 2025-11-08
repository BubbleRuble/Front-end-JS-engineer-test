import type { Meta, StoryObj } from '@storybook/react';
import { ToastMenu } from '../Components/Toast/toast';

const meta: Meta<typeof ToastMenu> = {
  title: 'Feedback/Toast',
  component: ToastMenu,
};
export default meta;

export const Info: StoryObj<typeof ToastMenu> = {
  args: {
    message: 'Info message',
    type: 'info',
    duration: 2000
  }
}

export const Success: StoryObj<typeof ToastMenu> = {
  args: {message: 'Success message', type: 'success', duration: 2000}
}

export const Error: StoryObj<typeof ToastMenu> = {
  args: {message: 'Error message', type: 'error', duration: 3000}
}

