import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Icon clickable Svg={CopyIcon} className={cls.copyBtn} onClick={onCopy} />
      <code>{text}</code>
    </pre>
  );
});
