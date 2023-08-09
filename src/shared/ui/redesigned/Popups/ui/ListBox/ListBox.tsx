import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items: ListBoxItem<T>[];
  className?: string;
  label?: string;
  value?: T;
  defaultValue?: string;
  onChange?: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => items.find((item) => item.value === value), [items, value]);

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
        <HListBox.Button className={cls.trigger} as="div">
          <Button disabled={readonly} variant="filled" addonRight={<Icon Svg={ArrowIcon} />}>
            {selectedItem?.content ?? defaultValue}
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
                      [popupCls.selected]: selected,
                    },
                    [],
                  )}
                >
                  {selected}
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
