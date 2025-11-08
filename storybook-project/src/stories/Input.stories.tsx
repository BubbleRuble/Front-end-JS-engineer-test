import type { Meta, StoryObj } from '@storybook/react';
import { InputMenu } from '../Components/Input/input'

const meta: Meta<typeof InputMenu> = {
  title: 'Form/Input',
  component: InputMenu,
};
export default meta;

export const Password: StoryObj<typeof InputMenu> = {
  args: { type: 'password', placeholder: 'Enter password' },
};

export const Clearable: StoryObj<typeof InputMenu> = {
  args: { placeholder: 'Clear me', clearable: false},
};

