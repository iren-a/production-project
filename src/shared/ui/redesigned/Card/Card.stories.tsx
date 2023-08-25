import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="test" text="text text" />,
};
Primary.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
  children: <Text title="test" text="text text" />,
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {
  children: <Text title="test" text="text text" />,
};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];
