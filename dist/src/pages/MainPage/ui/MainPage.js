import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
var MainPage = function () {
    var t = useTranslation('main').t;
    return (_jsxs("div", { children: [_jsx(BugButton, {}), t('Главная страница', { ns: 'main' })] }));
};
export default MainPage;
