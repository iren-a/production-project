import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from './CommentCard';

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

export const Loading = Template.bind({});
Loading.args = {
  comment,
  isLoading: true,
};
