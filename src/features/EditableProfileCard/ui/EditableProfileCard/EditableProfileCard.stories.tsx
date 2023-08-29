import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
