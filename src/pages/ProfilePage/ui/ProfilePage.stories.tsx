import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

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

const state = {
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
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator, StoreDecorator(state)];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.decorators = [StoreDecorator(state)];
