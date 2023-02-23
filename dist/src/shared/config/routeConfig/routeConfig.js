var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["Main"] = "main";
    AppRoutes["About"] = "about";
    AppRoutes["NotFound"] = "notFound";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.Main] = '/',
    _a[AppRoutes.About] = '/about',
    // последний
    _a[AppRoutes.NotFound] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.Main] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}),
    },
    _b[AppRoutes.About] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}),
    },
    _b[AppRoutes.NotFound] = {
        path: RoutePath.notFound,
        element: _jsx(NotFoundPage, {}),
    },
    _b);
