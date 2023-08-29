import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlePageGreeting>;

const Template: ComponentStory<typeof ArticlePageGreeting> = () => <ArticlePageGreeting />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
