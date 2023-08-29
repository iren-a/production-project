import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticlesPage from './ArticlesPage';
import { Article, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'pages/ArticlePage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

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
    url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=desc&q=`,
    method: 'GET',
    status: 200,
    response: [
      { ...article, id: '1' },
      { ...article, id: '2' },
      { ...article, id: '3' },
      { ...article, id: '4' },
      { ...article, id: '5' },
      { ...article, id: '6' },
      { ...article, id: '7' },
      { ...article, id: '8' },
      { ...article, id: '9' },
    ],
  },
];

const state = {
  user: {
    authData: { id: '1', jsonSettings: { isArticlesPageWasOpened: true } },
  },
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator, StoreDecorator(state)];
Primary.parameters = {
  mockData,
};

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.decorators = [StoreDecorator(state)];
PrimaryDeprecated.parameters = {
  mockData,
};
