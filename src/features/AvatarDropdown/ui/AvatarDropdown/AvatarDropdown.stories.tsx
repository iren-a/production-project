import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <AvatarDropdown {...args} />
  </div>
);

const state = {
  user: {
    authData: {
      username: 'admin',
      avatar: 'assets/storybook.jpeg',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator, StoreDecorator(state)];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
PrimaryDeprecated.decorators = [StoreDecorator(state)];
