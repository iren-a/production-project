import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
