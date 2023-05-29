import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items: ListBoxItem[];
  className?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const ListBox = (props: ListBoxProps) => {
  const {
    items,
    className,
    label,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom-left',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4" className={classNames('', { [popupCls.disabled]: readonly })}>
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options as="ul" className={classNames(cls.options, {}, optionsClasses)}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                    [],
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
