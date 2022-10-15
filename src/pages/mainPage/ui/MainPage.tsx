import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const x = 'enter code';
    return <div>{t('Main page')}</div>;
};

export default MainPage;
