import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('commentList');

  if (isLoading) {
    return (
      <VStack gap="16" fullWidth className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" fullWidth className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={t('Комментарии отсутствуют', { ns: 'commentList' })} />}
          off={<TextDeprecated text={t('Комментарии отсутствуют', { ns: 'commentList' })} />}
        />
      )}
    </VStack>
  );
});
