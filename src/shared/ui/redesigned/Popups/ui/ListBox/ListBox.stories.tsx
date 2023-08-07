import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
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
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

const items = [
  { value: '1', content: 'aaa' },
  { value: '2', content: 'bbb' },
  { value: '3', content: 'ccc', disabled: true },
  { value: '4', content: 'ddd' },
];

export const Primary = Template.bind({});
Primary.args = {
  label: 'Выберите значение',
  items,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: 'Выберите значение',
  defaultValue: '2',
  items,
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Выберите значение',
  items,
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const DarkWithDefaultValue = Template.bind({});
DarkWithDefaultValue.args = {
  label: 'Выберите значение',
  defaultValue: '2',
  items,
};
DarkWithDefaultValue.decorators = [ThemeDecorator(Theme.Dark)];

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top-left',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top-right',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom-left',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom-right',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};
