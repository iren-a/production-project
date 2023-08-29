import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18nForTests';

export const I18nextDecorator = (StoryComponent: Story) => (
  <I18nextProvider i18n={i18n}>
    <StoryComponent />
  </I18nextProvider>
);
