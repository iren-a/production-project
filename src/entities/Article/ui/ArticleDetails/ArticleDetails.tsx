import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-deprecared.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ === 'storybook') {
      return;
    }

    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <HStack fullWidth justify="center">
          <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        </HStack>
        <VStack fullWidth gap="4">
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </VStack>
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.Center}
        text={t('Произошла ошибка при загрузке статьи', { ns: 'article' })}
      />
    );
  } else {
    content = (
      <>
        <HStack fullWidth justify="center">
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack fullWidth gap="4" data-testid="ArticleDetails.Info">
          <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
          <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.view ?? '')} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="16" fullWidth className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
