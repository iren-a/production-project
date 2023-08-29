import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
  <ScrollToTopButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
