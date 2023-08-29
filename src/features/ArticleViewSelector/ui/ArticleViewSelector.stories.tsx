import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
