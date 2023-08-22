import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const data = {
  username: 'admin',
  age: 20,
  country: Country.Kazakhstan,
  first: 'Ivan',
  lastname: 'Ivanov',
  city: 'Test',
  currency: Currency.USD,
  avatar: 'assets/storybook.jpeg',
};

export const Primary = Template.bind({});
Primary.args = {
  data,
};
Primary.decorators = [FeatureFlagsDecorator({ isAppRedesigned: false })];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {
  data,
};
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
