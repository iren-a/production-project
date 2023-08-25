import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLoaderLayout } from './AppLoaderLayout';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
  title: 'shared/redesigned/AppLoaderLayout',
  component: AppLoaderLayout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = () => <AppLoaderLayout />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];
