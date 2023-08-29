import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { PageError } from './PageError';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

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
