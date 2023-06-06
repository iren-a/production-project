import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useMobileDetect } from '@/shared/lib/hooks/useMobileDetect/useMobileDetect';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;

  const { t } = useTranslation();
  const isMobile = useMobileDetect();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('Ваш отзыв')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card fullWidth className={className}>
      <VStack fullWidth align="center" gap="8">
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating size={40} selectedStars={starsCount} onSelect={onSelectStars} />
      </VStack>
      {
        isMobile
          ? (
            <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
              <VStack fullWidth gap="32">
                {modalContent}
                <Button onClick={acceptHandle} size={ButtonSize.L} fullWidth>
                  {t('Отправить')}
                </Button>
              </VStack>
            </Drawer>
          )
          : (
            <Modal isOpen={isModalOpen} lazy>
              <VStack fullWidth gap="32">
                {modalContent}
                <HStack fullWidth gap="16" justify="end">
                  <Button onClick={cancelHandle} theme={ButtonTheme.OutlineRed}>
                    {t('Закрыть')}
                  </Button>
                  <Button onClick={acceptHandle}>
                    {t('Отправить')}
                  </Button>
                </HStack>
              </VStack>
            </Modal>
          )
      }
    </Card>
  );
});
