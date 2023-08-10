import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => (
  <ProfileCardRedesigned {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 20,
    country: Country.Kazakhstan,
    first: 'Ivan',
    lastname: 'Ivanov',
    city: 'Test',
    currency: Currency.USD,
    avatar: 'assets/storybook.jpeg',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
