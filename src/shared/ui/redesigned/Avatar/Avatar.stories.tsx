import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: 'assets/storybook.jpeg',
};
Primary.decorators = [NewDesignDecorator];

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: 'assets/storybook.jpeg',
};
Small.decorators = [NewDesignDecorator];
