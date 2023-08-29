import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articleId: '1',
};
Primary.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: '1',
};
WithoutRate.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {
  articleId: '1',
};
PrimaryDeprecated.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
PrimaryDeprecated.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRateDeprecated = Template.bind({});
WithoutRateDeprecated.args = {
  articleId: '1',
};
WithoutRateDeprecated.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
WithoutRateDeprecated.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
