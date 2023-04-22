import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack
      justify="between"
      fullWidth
      className={classNames('', {}, [className])}
    >
      <Text title={t('Профиль', { ns: 'profile' })} />
      {canEdit && (
        <HStack gap="8">
          {
            readonly
              ? (
                <Button
                  theme={ButtonTheme.Outline}
                  onClick={onEdit}
                >
                  {t('Редактировать', { ns: 'profile' })}
                </Button>
              )
              : (
                <>
                  <Button
                    theme={ButtonTheme.OutlineRed}
                    onClick={onCancelEdit}
                  >
                    {t('Отменить', { ns: 'profile' })}
                  </Button>
                  <Button
                    theme={ButtonTheme.Outline}
                    onClick={onSave}
                  >
                    {t('Сохранить', { ns: 'profile' })}
                  </Button>
                </>
              )
          }
        </HStack>
      )}
    </HStack>
  );
});
