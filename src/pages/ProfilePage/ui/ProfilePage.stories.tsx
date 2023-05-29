import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    routerParams: {
      path: '/profile/:id',
      route: '/profile/1',
    },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 20,
      country: Country.Kazakhstan,
      first: 'Ivan',
      lastname: 'Ivanov',
      city: 'Test',
      currency: Currency.USD,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.Dark),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 20,
        country: Country.Kazakhstan,
        first: 'Ivan',
        lastname: 'Ivanov',
        city: 'Test',
        currency: Currency.USD,
      },
    },
  }),
];
