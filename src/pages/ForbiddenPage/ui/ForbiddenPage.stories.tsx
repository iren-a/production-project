import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Primary = Template.bind({});
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
