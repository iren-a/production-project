import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesFilters, ArticlesFiltersProps } from './ArticlesFilters';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ArticleSortField } from '@/entities/Article';

export default {
  title: 'widgets/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

const args: Partial<ArticlesFiltersProps> = {
  sort: ArticleSortField.CREATED,
  order: 'desc',
};

export const Primary = Template.bind({});
Primary.decorators = [NewDesignDecorator];
Primary.args = args;
