import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const mockData = [
  {
    url: `${__API__}/notifications`,
    method: 'GET',
    status: 200,
    response: [
      {
        id: '1',
        title: 'Уведомление 1',
        description: 'Текст уведомления',
      },
      {
        id: '2',
        title: 'Уведомление 2',
        description: 'Текст уведомления',
      },
      {
        id: '3',
        title: 'Уведомление 3',
        description: 'Текст уведомления',
      },
    ],
  },
];

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = { mockData };
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
Primary.parameters = { mockData };
