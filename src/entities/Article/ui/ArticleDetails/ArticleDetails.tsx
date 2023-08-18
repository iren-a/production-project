import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Avatar as AvatarRedesigned } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-deprecared.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { renderArticleBlock } from './renderArticleBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsSkeleton = () => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={
      <VStack gap="8" fullWidth>
        <SkeletonRedesigned width={300} height={32} />
        <SkeletonRedesigned width={600} height={24} />
        <SkeletonRedesigned width="100%" height={200} />
        <SkeletonRedesigned width="100%" height={200} />
      </VStack>
    }
    off={
      <>
        <HStack fullWidth justify="center">
          <SkeletonDeprecated className={cls.avatar} width={200} height={200} border="50%" />
        </HStack>
        <VStack fullWidth gap="4">
          <SkeletonDeprecated width={300} height={32} />
          <SkeletonDeprecated width={600} height={24} />
          <SkeletonDeprecated width="100%" height={200} />
          <SkeletonDeprecated width="100%" height={200} />
        </VStack>
      </>
    }
  />
);

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack fullWidth justify="center">
        <AvatarRedesigned size={200} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack fullWidth gap="4" data-testid="ArticleDetails.Info">
        <TextDeprecated title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <HStack gap="8">
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={String(article?.view ?? '')} />
        </HStack>
        <HStack gap="8">
          <IconDeprecated Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<SkeletonRedesigned width="100%" height={420} />}
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ === 'storybook') {
      return;
    }

    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.Center}
        text={t('Произошла ошибка при загрузке статьи', { ns: 'article' })}
      />
    );
  } else {
    content = <ToggleFeatures feature="isAppRedesigned" on={<Redesigned />} off={<Deprecated />} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="16" fullWidth className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
