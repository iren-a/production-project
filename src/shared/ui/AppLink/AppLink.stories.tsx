import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.Primary,
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Text',
  theme: AppLinkTheme.Inverted,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.Inverted,
};
InvertedDark.decorators = [ThemeDecorator(Theme.Dark)];
