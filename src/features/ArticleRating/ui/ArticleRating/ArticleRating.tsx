import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;

  const { t } = useTranslation('article');
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id!,
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id!,
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Skeleton width="100%" height={120} />}
        off={<SkeletonDeprecated width="100%" height={120} />}
      />
    );
  }

  const rate = data?.[0]?.rate;

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью', { ns: 'article' })}
      feedbackTitle={t('Оставьте свой отзыв о статье', { ns: 'article' })}
      hasFeedback
      rate={rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});

export default ArticleRating;
