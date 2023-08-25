import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ListBox } from './ListBox';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <ListBox {...args} />
  </div>
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
Primary.decorators = [NewDesignDecorator];

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: 'Выберите значение',
  defaultValue: '2',
  items,
};
Primary.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
  label: 'Выберите значение',
  items,
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const DarkWithDefaultValue = Template.bind({});
DarkWithDefaultValue.args = {
  label: 'Выберите значение',
  defaultValue: '2',
  items,
};
DarkWithDefaultValue.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {
  label: 'Выберите значение',
  items,
};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const OrangeWithDefaultValue = Template.bind({});
OrangeWithDefaultValue.args = {
  label: 'Выберите значение',
  defaultValue: '2',
  items,
};
OrangeWithDefaultValue.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top-left',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};
TopLeft.decorators = [NewDesignDecorator];

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top-right',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};
TopRight.decorators = [NewDesignDecorator];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom-left',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};
BottomLeft.decorators = [NewDesignDecorator];

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom-right',
  defaultValue: '2',
  label: 'Выберите значение',
  items,
};
BottomRight.decorators = [NewDesignDecorator];
