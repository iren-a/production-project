import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentType } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation('commentList');

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className])}>
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            className={cls.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('Комментарии отсутствуют', { ns: 'commentList' })} />}
    </div>
  );
});
