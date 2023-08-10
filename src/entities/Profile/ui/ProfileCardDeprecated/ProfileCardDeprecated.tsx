import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        fullWidth
        justify="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        fullWidth
        justify="center"
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.Error}
          align={TextAlign.Center}
          title={t('Произошла ошибка при загрузке профиля', { ns: 'profile' })}
          text={t('Попробуйте обновить страницу', { ns: 'profile' })}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" fullWidth className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack fullWidth justify="center">
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Ваше имя', { ns: 'profile' })}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия', { ns: 'profile' })}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст', { ns: 'profile' })}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Город', { ns: 'profile' })}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Имя пользователя', { ns: 'profile' })}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар', { ns: 'profile' })}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
});
