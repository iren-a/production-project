import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleView,
  ArticleViewSelector,
  ArticleTypeTabs, ArticleType,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((type: ArticleType) => {
    dispatch(articlesPageActions.setType(type));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск', { ns: 'article' })}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        className={cls.tabs}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
});
