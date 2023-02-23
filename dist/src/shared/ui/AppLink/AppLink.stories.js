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
import { AppLink, AppLinkTheme } from './AppLink';
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
var Template = function (args) { return _jsx(AppLink, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.Primary,
};
export var Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    theme: AppLinkTheme.Inverted,
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.Primary,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];
export var InvertedDark = Template.bind({});
InvertedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.Inverted,
};
InvertedDark.decorators = [ThemeDecorator(Theme.Dark)];
