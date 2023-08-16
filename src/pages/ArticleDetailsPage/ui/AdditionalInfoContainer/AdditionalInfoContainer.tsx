import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import { getArticleDetailsData } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer = memo((props: AdditionalInfoContainerProps) => {
  const { className } = props;

  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(getRouteArticleEdit(article?.id));
    }
  }, [article?.id, navigate]);

  if (!article) {
    return null;
  }

  return (
    <Card className={classNames(cls.AdditionalInfoContainer, {}, [className])} padding="24">
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article.user}
        createdAt={article.createdAt}
        views={article.view}
      />
    </Card>
  );
});
