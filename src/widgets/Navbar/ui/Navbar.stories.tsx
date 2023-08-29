import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: {
      authData: {
        avatar: 'assets/storybook.jpeg',
      },
    },
  }),
];

export const LightDeprecated = Template.bind({});
LightDeprecated.args = {};

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [ThemeDecorator(Theme.Dark)];

export const OrangeDeprecated = Template.bind({});
OrangeDeprecated.args = {};
OrangeDeprecated.decorators = [ThemeDecorator(Theme.Orange)];

export const AuthDeprecated = Template.bind({});
AuthDeprecated.args = {};
AuthDeprecated.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];
