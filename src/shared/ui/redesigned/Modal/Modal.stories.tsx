import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!',
  isOpen: true,
};
Primary.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!',
  isOpen: true,
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const Orange = Template.bind({});
Orange.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!',
  isOpen: true,
};
Orange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];
