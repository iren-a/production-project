import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items = [
  { value: '1', content: 'first' },
  { value: '2', content: 'second' },
  { value: '2', content: 'third' },
];

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>,
  items,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'top-left',
  items,
};

export const TopRight = Template.bind({});
TopRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'top-right',
  items,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom-left',
  items,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom-right',
  items,
};
