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
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
var App = function () {
    var theme = useTheme().theme;
    return (_jsxs("div", __assign({ className: classNames('app', {}, [theme]) }, { children: [_jsx(Navbar, {}), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] }))] })));
};
export default App;
