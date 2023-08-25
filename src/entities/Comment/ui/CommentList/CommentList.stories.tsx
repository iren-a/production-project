import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentType } from '../../model/types/comment';
import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const comments: CommentType[] = [
  {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Ivan' },
  },
  {
    id: '2',
    text: 'test',
    user: { id: '1', username: 'Ivan' },
  },
];

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments,
};
Primary.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
Loading.decorators = [NewDesignDecorator];

export const PrimaryDeprecated = Template.bind({});
PrimaryDeprecated.args = {
  comments,
};

export const LoadingDeprecated = Template.bind({});
LoadingDeprecated.args = {
  comments: [],
  isLoading: true,
};
