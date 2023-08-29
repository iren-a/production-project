import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSortSelector, ArticleSortSelectorProps } from './ArticleSortSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ArticleSortField } from '@/entities/Article';

export default {
  title: 'features/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

const args: Partial<ArticleSortSelectorProps> = {
  sort: ArticleSortField.CREATED,
  order: 'desc',
};

export const Primary = Template.bind({});
Primary.args = args;
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = args;
