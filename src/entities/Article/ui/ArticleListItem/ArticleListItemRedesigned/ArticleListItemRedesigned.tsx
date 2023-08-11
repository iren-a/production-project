import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleTextBlock } from '../../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;

  const { t } = useTranslation('article');

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.view)} className={cls.views} />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        fullWidth
        padding="24"
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <VStack fullWidth gap="16">
          <HStack fullWidth gap="8">
            <Avatar size={32} src={article.user.avatar} />
            <Text text={article.user.username} bold />
            <Text text={article.createdAt} />
          </HStack>
          <Text text={article.title} bold />
          <Text text={article.subtitle} size="s" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            alt={article.img}
            className={cls.image}
          />
          {textBlock?.paragraphs && (
            <Text text={textBlock.paragraphs.slice(0, 2).join(' ')} className={cls.textBlock} />
          )}
          <HStack fullWidth justify="between">
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button variant="outlined">{t('Читать далее', { ns: 'article' })}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      className={classNames('', {}, [className, cls[view]])}
      to={getRouteArticleDetails(article.id)}
      target={target}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
