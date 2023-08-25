import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: 200,
};
Primary.decorators = [NewDesignDecorator];

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
};
Circle.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  width: '100%',
  height: 200,
};
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  width: '100%',
  height: 200,
};
PrimaryOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];
