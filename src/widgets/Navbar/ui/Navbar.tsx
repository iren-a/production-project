import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared//ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

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
      <Dropdown
        className={cls.dropdown}
        trigger={<Avatar size={30} src={authData.avatar} />}
        items={[
          ...(isAdminPanelAvailable
            ? [{
              value: 'admin',
              content: t('Админка'),
              href: RoutePath.adminPanel,
            }]
            : []),
          {
            value: 'profile',
            content: t('Профиль'),
            href: `${RoutePath.profile}/${authData.id}`,
          },
          {
            value: 'logout',
            content: t('Выйти'),
            onClick: onLogout,
          },
        ]}
      />
    </header>
  );
});

export default Navbar;
