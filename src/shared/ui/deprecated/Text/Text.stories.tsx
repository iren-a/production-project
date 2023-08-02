import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  theme: TextTheme.Error,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: TextSize.L,
};
