var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Modal, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!',
    isOpen: true,
};
export var Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
