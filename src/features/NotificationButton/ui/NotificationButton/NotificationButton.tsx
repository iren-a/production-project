import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useMobileDetect } from '@/shared/lib/hooks/useMobileDetect/useMobileDetect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const isMobile = useMobileDetect();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderTrigger = (onClick?: () => void) => (
    <Button theme={ButtonTheme.Clear} onClick={onClick}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  if (isMobile) {
    return (
      <>
        {renderTrigger(onOpenDrawer)}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      direction="bottom-left"
      trigger={renderTrigger()}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
