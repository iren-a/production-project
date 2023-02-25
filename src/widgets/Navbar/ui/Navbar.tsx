import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
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
      <div className={classNames(cls.Navbar)}>
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
    <div className={classNames(cls.Navbar)}>
      <Button
        theme={ButtonTheme.ClearInverted}
        onClick={onLogout}
        className={cls.logInButton}
      >
        {t('Выйти')}
      </Button>
    </div>
  );
};

export default Navbar;
