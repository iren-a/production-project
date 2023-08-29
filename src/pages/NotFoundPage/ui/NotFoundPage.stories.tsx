import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
