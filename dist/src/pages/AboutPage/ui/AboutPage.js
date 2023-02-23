import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsx("div", { children: t('О сайте', { ns: 'about' }) }));
};
export default AboutPage;
