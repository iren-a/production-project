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
import { Button, ButtonSize, ButtonTheme } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.Clear,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.ClearInverted,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
};
export var OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
    size: ButtonSize.L,
};
export var OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
    size: ButtonSize.Xl,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.Outline,
};
OutlineDark.decorators = [ThemeDecorator(Theme.Dark)];
export var Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.Background,
};
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BackgroundInverted,
};
export var Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
};
export var SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.L,
};
export var SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.Xl,
};
