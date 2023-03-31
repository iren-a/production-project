import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';
import { Article, ArticleType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const data: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: 'img',
  user: {
    id: '1',
    username: 'Ivan',
  },
  view: 100,
  createdAt: '',
  type: [ArticleType.IT],
  blocks: [],
};

describe('articleDetailsSlice.test', () => {
  test('test fetch article by id service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending,
    )).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test('test fetch article by id service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(data, data.id, ''),
    )).toEqual({
      isLoading: false,
      data,
    });
  });
});
