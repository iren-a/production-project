import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;

  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => (
    [
      {
        value: ArticleType.ALL,
        content: t('Все статьи', { ns: 'article' }),
      },
      {
        value: ArticleType.IT,
        content: t('IT', { ns: 'article' }),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика', { ns: 'article' }),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука', { ns: 'article' }),
      },
    ]
  ), [t]);

  const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
    onChangeType(tab.value);
  }, [onChangeType]);

  return (
    <Tabs<ArticleType>
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  );
});
