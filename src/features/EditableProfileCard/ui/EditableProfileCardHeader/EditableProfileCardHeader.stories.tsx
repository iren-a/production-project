import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/EditableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {};
