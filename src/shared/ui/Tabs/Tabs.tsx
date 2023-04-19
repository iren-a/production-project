import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/lib/typedMemo/typedMemo';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const clickHandle = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {
        tabs.map((tab) => (
          <Card
            key={tab.value}
            theme={tab.value === value ? CardTheme.Primary : CardTheme.Outlined}
            className={cls.tab}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        ))
      }
    </div>
  );
});
