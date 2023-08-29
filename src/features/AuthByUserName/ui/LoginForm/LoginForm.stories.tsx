import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '123',
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '123',
      error: 'ERROR',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '123',
    },
  }),
];

export const WithErrorDeprecated = Template.bind({});
WithErrorDeprecated.args = {};
WithErrorDeprecated.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'Ivan',
      password: '123',
      error: 'ERROR',
    },
  }),
];

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {};
LoadingDeprecated.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];
