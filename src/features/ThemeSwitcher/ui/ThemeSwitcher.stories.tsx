import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const LightDeprecated = Template.bind({});
LightDeprecated.args = {};

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeDeprecated = Template.bind({});
OrangeDeprecated.args = {};
OrangeDeprecated.decorators = [ThemeDecorator(Theme.Orange)];
