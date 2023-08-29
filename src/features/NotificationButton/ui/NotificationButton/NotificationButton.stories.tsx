import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationButton } from './NotificationButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
