import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Profile } from '../../model/types/profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ProfileCardRedesigned {...props} />}
    off={<ProfileCardDeprecated {...props} />}
  />
));
