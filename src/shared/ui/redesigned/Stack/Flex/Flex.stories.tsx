import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </>
  ),
};

export const RowGap = Template.bind({});
RowGap.args = {
  gap: '4',
  children: (
    <>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </>
  ),
};

export const ColumnGap = Template.bind({});
ColumnGap.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </>
  ),
};
