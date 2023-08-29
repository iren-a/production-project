import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo, ArticleAdditionalInfoProps } from './ArticleAdditionalInfo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'widgets/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
  <ArticleAdditionalInfo {...args} />
);

const args: Partial<ArticleAdditionalInfoProps> = {
  author: {
    id: '1',
    username: 'admin',
    avatar: 'assets/storybook.jpeg',
  },
  views: 15,
};

export const Primary = Template.bind({});
Primary.args = args;
Primary.decorators = [NewDesignDecorator];
