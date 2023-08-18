import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/deprecated/Text';
import { Button as ButtonRedesigned, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card fullWidth padding="24">
          <HStack justify="between" fullWidth className={classNames('', {}, [className])}>
            <Text title={t('Профиль', { ns: 'profile' })} />
            {canEdit && (
              <HStack gap="8">
                {readonly ? (
                  <Button
                    variant="outlined"
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('Редактировать', { ns: 'profile' })}
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      onClick={onCancelEdit}
                      data-testid="EditableProfileCardHeader.CancelButton"
                      color="error"
                    >
                      {t('Отменить', { ns: 'profile' })}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                      color="success"
                    >
                      {t('Сохранить', { ns: 'profile' })}
                    </Button>
                  </>
                )}
              </HStack>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack justify="between" fullWidth className={classNames('', {}, [className])}>
          <TextRedesigned title={t('Профиль', { ns: 'profile' })} />
          {canEdit && (
            <HStack gap="8">
              {readonly ? (
                <ButtonRedesigned
                  theme={ButtonTheme.Outline}
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать', { ns: 'profile' })}
                </ButtonRedesigned>
              ) : (
                <>
                  <ButtonRedesigned
                    theme={ButtonTheme.OutlineRed}
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Отменить', { ns: 'profile' })}
                  </ButtonRedesigned>
                  <ButtonRedesigned
                    theme={ButtonTheme.Outline}
                    onClick={onSave}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Сохранить', { ns: 'profile' })}
                  </ButtonRedesigned>
                </>
              )}
            </HStack>
          )}
        </HStack>
      }
    />
  );
});
