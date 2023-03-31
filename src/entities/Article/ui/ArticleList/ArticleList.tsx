import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(null)
    .map((item, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ArticleListItemSkeleton key={i} view={view} className={cls.card} />
    ))
);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;

  const renderArticle = useCallback((article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={cls.card}
    />
  ), [view]);

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
