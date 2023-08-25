import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const comment: CommentType = {
  id: '1',
  text: 'hello world',
  user: { id: '1', username: 'Ivan' },
};

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comment,
};
Primary.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
  comment,
  isLoading: true,
};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {
  comment,
};

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {
  comment,
  isLoading: true,
};
