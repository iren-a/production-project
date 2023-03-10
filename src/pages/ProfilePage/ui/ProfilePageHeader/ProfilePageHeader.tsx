import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation('profile');

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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль', { ns: 'profile' })} />
      {
        readonly
          ? (
            <Button
              theme={ButtonTheme.Outline}
              className={cls.editButton}
              onClick={onEdit}
            >
              {t('Редактировать', { ns: 'profile' })}
            </Button>
          )
          : (
            <>
              <Button
                theme={ButtonTheme.OutlineRed}
                className={cls.editButton}
                onClick={onCancelEdit}
              >
                {t('Отменить', { ns: 'profile' })}
              </Button>
              <Button
                theme={ButtonTheme.Outline}
                className={cls.saveButton}
                onClick={onSave}
              >
                {t('Сохранить', { ns: 'profile' })}
              </Button>
            </>
          )
      }
    </div>
  );
});
