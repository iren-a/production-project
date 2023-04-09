import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared//ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.ClearInverted}
          onClick={onOpenModal}
          className={cls.logInButton}
        >
          {t('Войти')}
        </Button>
        <LoginModal
          isOpen={isAuthModalOpen}
          onClose={onCloseModal}
        />
      </div>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text
        className={cls.appName}
        title={t('App')}
        theme={TextTheme.Inverted}
      />
      <AppLink
        to={RoutePath.articleCreate}
        theme={AppLinkTheme.Inverted}
      >
        {t('Создать статью')}
      </AppLink>
      <Button
        theme={ButtonTheme.ClearInverted}
        onClick={onLogout}
        className={cls.logInButton}
      >
        {t('Выйти')}
      </Button>
    </header>
  );
});

export default Navbar;
