import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesInfiniteListProps {
  className?: string;
}

export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
  const { className } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const [searchParam] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParam));
  });

  if (error) {
    return <Text text={t('Ошибка при загрузке статей', { ns: 'article' })} />;
  }

  return (
    <ArticleList
      view={view}
      isLoading={isLoading}
      articles={articles}
      className={className}
    />
  );
});
