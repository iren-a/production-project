import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from './Button';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
Primary.decorators = [NewDesignDecorator];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: 'clear',
};
Clear.decorators = [NewDesignDecorator];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  variant: 'outlined',
};
Outline.decorators = [NewDesignDecorator];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'l',
};
OutlineSizeL.decorators = [NewDesignDecorator];

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Text',
  variant: 'outlined',
  size: 'xl',
};
OutlineSizeXl.decorators = [NewDesignDecorator];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlineDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Dark)];

export const OutlineOrange = Template.bind({});
OutlineOrange.args = {
  children: 'Text',
  variant: 'outlined',
};
OutlineOrange.decorators = [NewDesignDecorator, ThemeDecorator(Theme.Orange)];

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  variant: 'outlined',
  disabled: true,
};
Disabled.decorators = [NewDesignDecorator];

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  children: 'Text',
  variant: 'outlined',
  color: 'success',
};
OutlineSuccess.decorators = [NewDesignDecorator];

export const OutlineError = Template.bind({});
OutlineError.args = {
  children: 'Text',
  variant: 'outlined',
  color: 'error',
};
OutlineError.decorators = [NewDesignDecorator];

export const OutlineAddonLeft = Template.bind({});
OutlineAddonLeft.args = {
  children: 'Text',
  variant: 'outlined',
  addonLeft: '>',
};
OutlineAddonLeft.decorators = [NewDesignDecorator];

export const OutlineAddonRight = Template.bind({});
OutlineAddonRight.args = {
  children: 'Text',
  variant: 'outlined',
  addonRight: '>',
};
OutlineAddonRight.decorators = [NewDesignDecorator];
