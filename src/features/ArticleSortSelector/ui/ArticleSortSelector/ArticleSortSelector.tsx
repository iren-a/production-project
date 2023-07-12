import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newSort: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props;

  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию', { ns: 'article' }),
      },
      {
        value: 'desc',
        content: t('убыванию', { ns: 'article' }),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания', { ns: 'article' }),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию', { ns: 'article' }),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам', { ns: 'article' }),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        label={t('Сортировать по', { ns: 'article' })}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('по', { ns: 'article' })}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
