import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  search: string;
  type: ArticleType;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newSort: SortOrder) => void;
  onChangeType: (type: ArticleType) => void;
  onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    sort,
    order,
    search,
    type,
    onChangeSort,
    onChangeOrder,
    onChangeType,
    onChangeSearch,
  } = props;

  const { t } = useTranslation('article');

  return (
    <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding="24">
      <VStack gap="32">
        <Input
          placeholder={t('Поиск', { ns: 'article' })}
          value={search}
          onChange={onChangeSearch}
          addonLeft={<Icon Svg={SearchIcon} />}
          size="s"
        />
        <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
      </VStack>
    </Card>
  );
});
