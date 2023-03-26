import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentType } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: CommentType;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton className={cls.avatar} width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && (
          <Avatar size={30} className={cls.avatar} src={comment.user.avatar} />
        )}
        <Text title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
