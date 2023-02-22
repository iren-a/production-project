import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar)}>
      <Button
        theme={ButtonTheme.ClearInverted}
        onClick={onToggleModal}
        className={cls.logInButton}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum
        in, iusto provident quos tenetur!
      </Modal>
    </div>
  );
};

export default Navbar;
