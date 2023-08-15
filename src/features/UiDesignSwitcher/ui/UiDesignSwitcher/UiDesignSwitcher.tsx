import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items = useMemo(
    () => [
      {
        content: t('Новый'),
        value: 'new',
      },
      {
        content: t('Старый'),
        value: 'old',
      },
    ],
    [t],
  );

  const onChange = useCallback(
    async (value: string) => {
      if (!authData) {
        return;
      }

      setIsLoading(true);
      await dispatch(
        updateFeatureFlags({
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
          userId: authData?.id,
        }),
      ).unwrap();
      setIsLoading(false);
    },
    [authData, dispatch],
  );

  return (
    <HStack gap="16">
      <Text text={t('Вариант интерфейса')} />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          onChange={onChange}
          className={className}
        />
      )}
    </HStack>
  );
});
