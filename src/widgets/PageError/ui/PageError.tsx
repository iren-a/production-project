import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import cls from './PageError.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const onReloadPage = () => {
    window.location.reload();
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames(cls.PageError, {}, [className])}>
          <p>{t('Произошла непредвиденная ошибка')}</p>
          <Button onClick={onReloadPage}>{t('Обновить страницу')}</Button>
        </div>
      }
      off={
        <div className={classNames(cls.PageError, {}, [className])}>
          <p>{t('Произошла непредвиденная ошибка')}</p>
          <ButtonDeprecated onClick={onReloadPage}>{t('Обновить страницу')}</ButtonDeprecated>
        </div>
      }
    />
  );
});
