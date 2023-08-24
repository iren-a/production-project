import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItemSkeleton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card
            fullWidth
            className={classNames(cls.ArticleListItemRedesigned, {}, [className, cls[view]])}
            padding="24"
          >
            <VStack fullWidth gap="16">
              <HStack fullWidth gap="8">
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={150} height={24} />
              </HStack>
              <Skeleton width={200} height={24} />
              <Skeleton width={200} height={24} />
              <Skeleton width="100%" height={250} />
              <Skeleton width="100%" height={16} />
              <Skeleton width="100%" height={16} />
              <Skeleton width="100%" height={16} />
              <HStack fullWidth justify="between">
                <Skeleton width={150} height={42} />
              </HStack>
            </VStack>
          </Card>
        }
        off={
          <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <CardDeprecated>
              <div className={cls.header}>
                <SkeletonDeprecated width={30} height={30} border="50%" />
                <SkeletonDeprecated width={150} height={16} className={cls.username} />
                <SkeletonDeprecated width={150} height={16} className={cls.date} />
              </div>
              <SkeletonDeprecated width={250} height={24} className={cls.title} />
              <SkeletonDeprecated height={200} className={cls.image} />
              <div className={cls.footer}>
                <SkeletonDeprecated width={200} height={36} />
              </div>
            </CardDeprecated>
          </div>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.ArticleListItemRedesigned, {}, [className, cls[view]])}
          padding="0"
        >
          <Skeleton width="100%" height={140} className={cls.image} />
          <VStack className={cls.info} gap="4">
            <Skeleton width={150} height={32} />
            <Skeleton width={150} height={32} />
            <Skeleton width={150} height={32} />
            <VStack gap="4" className={cls.footer} fullWidth>
              <HStack justify="between" fullWidth>
                <Skeleton width={80} height={20} />
                <Skeleton width={80} height={20} />
              </HStack>
              <HStack gap="4">
                <Skeleton width={80} height={20} />
              </HStack>
            </VStack>
          </VStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.imageWrapper}>
              <SkeletonDeprecated width={200} height={200} className={cls.image} />
            </div>
            <div className={cls.infoWrapper}>
              <SkeletonDeprecated width={130} height={16} />
            </div>
            <SkeletonDeprecated width={150} height={16} className={cls.title} />
          </Card>
        </div>
      }
    />
  );
});
