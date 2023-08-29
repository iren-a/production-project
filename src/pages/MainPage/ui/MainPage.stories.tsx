import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
