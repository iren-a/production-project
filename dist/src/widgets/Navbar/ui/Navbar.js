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
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
export var Navbar = function () {
    var t = useTranslation().t;
    var _a = useState(false), isAuthModalOpen = _a[0], setIsAuthModalOpen = _a[1];
    var onToggleModal = useCallback(function () {
        setIsAuthModalOpen(function (prev) { return !prev; });
    }, []);
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.ClearInverted, onClick: onToggleModal, className: cls.logInButton }, { children: t('Войти') })), _jsx(Modal, __assign({ isOpen: isAuthModalOpen, onClose: onToggleModal }, { children: _jsx("div", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores dicta dolor dolores illum in, iusto provident quos tenetur!" }) }))] })));
};
export default Navbar;
