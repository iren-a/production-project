import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

export default {
  title: 'shared/redesigned/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    "import React from 'react';\n" +
    "import { ComponentStory, ComponentMeta } from '@storybook/react';\n" +
    "import { Code } from './Code';\n" +
    '\n' +
    'export default {\n' +
    "  title: 'shared/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Primary.decorators = [NewDesignDecorator];
