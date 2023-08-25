import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StarRating } from './StarRating';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Two = Template.bind({});
Two.args = {
  selectedStars: 2,
};

export const Five = Template.bind({});
Five.args = {
  selectedStars: 5,
};
