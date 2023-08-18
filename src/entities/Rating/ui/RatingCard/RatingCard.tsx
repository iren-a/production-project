import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useMobileDetect } from '@/shared/lib/hooks/useMobileDetect/useMobileDetect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

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
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;

  const { t } = useTranslation();
  const isMobile = useMobileDetect();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            placeholder={t('Ваш отзыв')}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            placeholder={t('Ваш отзыв')}
            value={feedback}
            onChange={setFeedback}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack fullWidth align="center" gap="8">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={starsCount ? t('Спасибо за оценку') : title} />}
          off={<TextDeprecated title={starsCount ? t('Спасибо за оценку') : title} />}
        />
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<StarRating size={40} selectedStars={starsCount} onSelect={onSelectStars} />}
          off={
            <StarRatingDeprecated size={40} selectedStars={starsCount} onSelect={onSelectStars} />
          }
        />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
          <VStack fullWidth gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button data-testid="RatingCard.Send" onClick={acceptHandle} size="l" fullWidth>
                  {t('Отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  data-testid="RatingCard.Send"
                  onClick={acceptHandle}
                  size={ButtonSize.L}
                  fullWidth
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack fullWidth gap="32">
            {modalContent}
            <HStack fullWidth gap="16" justify="end">
              <ToggleFeatures
                feature="isAppRedesigned"
                on={
                  <>
                    <Button
                      data-testid="RatingCard.Close"
                      onClick={cancelHandle}
                      variant="outlined"
                    >
                      {t('Закрыть')}
                    </Button>
                    <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                      {t('Отправить')}
                    </Button>
                  </>
                }
                off={
                  <>
                    <ButtonDeprecated
                      data-testid="RatingCard.Close"
                      onClick={cancelHandle}
                      theme={ButtonTheme.OutlineRed}
                    >
                      {t('Закрыть')}
                    </ButtonDeprecated>
                    <ButtonDeprecated data-testid="RatingCard.Send" onClick={acceptHandle}>
                      {t('Отправить')}
                    </ButtonDeprecated>
                  </>
                }
              />
            </HStack>
          </VStack>
        </Modal>
      )}
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card data-testid="RatingCard" fullWidth className={className}>
          {content}
        </Card>
      }
      off={
        <CardDeprecated data-testid="RatingCard" fullWidth className={className}>
          {content}
        </CardDeprecated>
      }
    />
  );
});
