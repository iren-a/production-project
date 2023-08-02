import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3).fill(null).map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={i} view={view} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;

  const { t } = useTranslation('article');

  const renderArticle = useCallback(
    (article: Article) => (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={cls.card}
        target={target}
      />
    ),
    [target, view],
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены', { ns: 'article' })} />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])} data-testid="ArticleList">
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
