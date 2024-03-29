import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-deprecated.svg';
import { Button, ButtonTheme } from '../Button';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * @deprecated
 * Устарел, используем новые компоненты из папки redesigned
 */
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} onClick={onCopy} theme={ButtonTheme.Clear}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
