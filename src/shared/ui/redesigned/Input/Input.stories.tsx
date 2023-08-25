import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: 200 }}>
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter text',
  value: '3576564',
};
Primary.decorators = [NewDesignDecorator];

export const SizeS = Template.bind({});
SizeS.args = {
  placeholder: 'Enter text',
  value: '3576564',
  size: 's',
};
SizeS.decorators = [NewDesignDecorator];

export const SizeM = Template.bind({});
SizeM.args = {
  placeholder: 'Enter text',
  value: '3576564',
  size: 'm',
};
SizeM.decorators = [NewDesignDecorator];

export const SizeL = Template.bind({});
SizeL.args = {
  placeholder: 'Enter text',
  value: '3576564',
  size: 'l',
};
SizeL.decorators = [NewDesignDecorator];

export const AddonLeft = Template.bind({});
AddonLeft.args = {
  placeholder: 'Enter text',
  value: '3576564',
  addonLeft: '>',
};
AddonLeft.decorators = [NewDesignDecorator];

export const AddonRight = Template.bind({});
AddonRight.args = {
  placeholder: 'Enter text',
  value: '3576564',
  addonRight: '>',
};
AddonRight.decorators = [NewDesignDecorator];
