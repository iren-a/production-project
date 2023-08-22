import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.Light, color: '#fcfcfc' },
      { name: 'dark', class: Theme.Dark, color: '#090949' },
      { name: 'orange', class: Theme.Orange, color: '#d54330' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(SuspenseDecorator);
addDecorator(StoreDecorator({}));
addDecorator(RouterDecorator);
addDecorator(FeatureFlagsDecorator({ isAppRedesigned: false }));
