import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
      <Card fullWidth padding="24" className={className}>
        <VStack gap="32">
          <HStack fullWidth justify="center">
            <Skeleton border="50%" width={128} height={128} />
          </HStack>
          <HStack fullWidth gap="24">
            <VStack fullWidth gap="16">
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>
            <VStack fullWidth gap="16">
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    );
  }

  if (error) {
    return (
      <HStack fullWidth justify="center">
        <Text
          variant="error"
          align="center"
          title={t('Произошла ошибка при загрузке профиля', { ns: 'profile' })}
          text={t('Попробуйте обновить страницу', { ns: 'profile' })}
        />
      </HStack>
    );
  }

  return (
    <Card fullWidth padding="24" className={className}>
      <VStack gap="32" fullWidth>
        {data?.avatar && (
          <HStack fullWidth justify="center">
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack fullWidth gap="24">
          <VStack fullWidth gap="16">
            <Input
              value={data?.first}
              label={t('Ваше имя', { ns: 'profile' })}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t('Ваша фамилия', { ns: 'profile' })}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Ваш возраст', { ns: 'profile' })}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t('Город', { ns: 'profile' })}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack fullWidth gap="16">
            <Input
              value={data?.username}
              label={t('Имя пользователя', { ns: 'profile' })}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Ссылка на аватар', { ns: 'profile' })}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
