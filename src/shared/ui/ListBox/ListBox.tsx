import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight,
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
};

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
    <HStack gap="4" className={classNames('', { [cls.disabled]: readonly })}>
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
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
                      [cls.active]: active,
                      [cls.disabled]: item.disabled,
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
