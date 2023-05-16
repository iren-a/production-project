import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleType } from '../../consts/consts';
import { Article } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data: Article = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  user: {
    id: '1',
    username: 'Ivan',
  },
  img: 'img',
  view: 100,
  createdAt: '',
  type: [ArticleType.IT],
  blocks: [],
};

describe('fetchArticleById.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(data.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data.id);

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
