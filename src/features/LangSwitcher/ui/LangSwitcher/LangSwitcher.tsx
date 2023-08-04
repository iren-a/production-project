import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '../../../../shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, short } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button variant="clear" onClick={toggle}>
          {t(short ? 'Язык (сокращение)' : 'Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.ClearInverted}
          onClick={toggle}
        >
          {t(short ? 'Язык (сокращение)' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});
