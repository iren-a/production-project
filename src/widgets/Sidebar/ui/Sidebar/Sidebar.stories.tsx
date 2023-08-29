import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div style={{ height: '100vh' }}>
    <Sidebar {...args} />
  </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.Dark),
];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.Orange),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: { authData: undefined },
  }),
];

export const LightDeprecated = Template.bind({});
LightDeprecated.args = {};
LightDeprecated.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const DarkDeprecated = Template.bind({});
DarkDeprecated.args = {};
DarkDeprecated.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.Dark),
];

export const OrangeDeprecated = Template.bind({});
OrangeDeprecated.args = {};
OrangeDeprecated.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
  ThemeDecorator(Theme.Orange),
];

export const NoAuthDeprecated = Template.bind({});
NoAuthDeprecated.args = {};
NoAuthDeprecated.decorators = [
  StoreDecorator({
    user: { authData: undefined },
  }),
];
