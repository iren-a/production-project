import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text/Text';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (!authData) {
    return (
      <div className={classNames(mainClass, {}, [className])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Button variant="clear" onClick={onOpenModal} className={cls.logInButton}>
              {t('Войти')}
            </Button>
          }
          off={
            <ButtonDeprecated
              theme={ButtonTheme.ClearInverted}
              onClick={onOpenModal}
              className={cls.logInButton}
            >
              {t('Войти')}
            </ButtonDeprecated>
          }
        />
        <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
      </div>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <header className={classNames(mainClass, {}, [className])}>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      }
      off={
        <header className={classNames(mainClass, {}, [className])}>
          <Text className={cls.appName} title={t('App')} theme={TextTheme.Inverted} />
          <AppLink to={getRouteArticleCreate()} theme={AppLinkTheme.Inverted}>
            {t('Создать статью')}
          </AppLink>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </header>
      }
    />
  );
});

export default Navbar;
