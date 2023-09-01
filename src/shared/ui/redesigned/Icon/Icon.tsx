import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { TestsProps } from '@/shared/types/tests';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps, TestsProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const { className, Svg, clickable, onClickCapture, ...otherProps } = props;

  const icon = (
    <Svg className={classNames(cls.Icon, {}, [className])} {...otherProps} onClick={undefined} />
  );

  if (clickable) {
    return (
      <button
        type="button"
        className={cls.button}
        onClick={props.onClick}
        data-testid={props['data-testid']}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
