import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from '../Components/SidebarMenu/sidebarMenu';
import type { MenuItem } from '../Components/SidebarMenu/sidebarMenu';
import { useState } from 'react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    open: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};
export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const simpleMenu: MenuItem[] = [
  { label: 'Home' },
  { label: 'About' },
  {
    label: 'Dashboard',
    children: [
      { label: 'Services' },
      { label: 'Support' },
    ],
  },
];

export const DefaultMenu: Story = {
  args: {
    items: simpleMenu,
    open: true,
  },
};

export const Toggleable: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: 20 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            margin: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Open Menu
        </button>

        <SidebarMenu
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
  args: {
    items: simpleMenu,
  },
};

