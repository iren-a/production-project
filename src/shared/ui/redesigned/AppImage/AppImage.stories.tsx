import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'assets/storybook.jpeg',
};
Primary.decorators = [NewDesignDecorator];
