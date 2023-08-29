import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Article, ArticleType } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
);

const article: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: 'assets/storybook.jpeg',
  user: {
    id: '1',
    username: 'Ivan',
  },
  view: 100,
  createdAt: '',
  type: [ArticleType.IT],
  blocks: [],
};

const mockData = [
  {
    url: `${__API__}/articles?_limit=3&_expand=user`,
    method: 'GET',
    status: 200,
    response: [
      { ...article, id: '1' },
      { ...article, id: '2' },
      { ...article, id: '3' },
    ],
  },
];

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];
Primary.parameters = {
  mockData,
};

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.parameters = {
  mockData,
};
