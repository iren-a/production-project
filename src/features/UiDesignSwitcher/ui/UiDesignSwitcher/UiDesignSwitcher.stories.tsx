import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [NewDesignDecorator];
