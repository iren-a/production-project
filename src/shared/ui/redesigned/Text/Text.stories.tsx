import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text } from './Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Text',
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
Primary.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
PrimaryOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  variant: 'error',
};
Primary.decorators = [NewDesignDecorator];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem ipsum',
};
Primary.decorators = [NewDesignDecorator];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
OnlyText.decorators = [NewDesignDecorator];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem ipsum',
};
OnlyTitleDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
};
OnlyTextDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: 's',
};
SizeS.decorators = [NewDesignDecorator];

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: 'm',
};
SizeM.decorators = [NewDesignDecorator];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Lorem ipsum',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum eius esse exercitationem impedit obcaecati quam quasi qui tenetur!',
  size: 'l',
};
SizeL.decorators = [NewDesignDecorator];
