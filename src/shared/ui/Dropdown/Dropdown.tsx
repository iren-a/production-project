import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItem[];
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight,
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
};

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    trigger,
    items,
    direction = 'bottom-left',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className])}
    >
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={item.value} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={item.value} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
