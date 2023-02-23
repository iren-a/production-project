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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';
export var Sidebar = function (props) {
    var _a;
    var className = props.className;
    var t = useTranslation().t;
    var _b = useState(false), collapsed = _b[0], setCollapsed = _b[1];
    var onToggle = function () {
        setCollapsed(function (prevState) { return !prevState; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_a = {}, _a[cls.collapsed] = collapsed, _a), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapsedBtn, theme: ButtonTheme.BackgroundInverted, square: true, size: ButtonSize.L }, { children: collapsed ? '>' : '<' })), _jsxs("div", __assign({ className: cls.items }, { children: [_jsxs(AppLink, __assign({ theme: AppLinkTheme.Inverted, to: RoutePath.main, className: cls.item }, { children: [_jsx(MainIcon, { className: cls.icon }), _jsx("span", __assign({ className: cls.link }, { children: t('Главная') }))] })), _jsxs(AppLink, __assign({ theme: AppLinkTheme.Inverted, to: RoutePath.about, className: cls.item }, { children: [_jsx(AboutIcon, { className: cls.icon }), _jsx("span", __assign({ className: cls.link }, { children: t('О сайте') }))] }))] })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { className: cls.lang, short: collapsed })] }))] })));
};
