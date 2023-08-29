import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />;

export const Primary = Template.bind({});
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
