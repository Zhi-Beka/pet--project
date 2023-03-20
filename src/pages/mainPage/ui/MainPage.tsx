import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import Page from "shared/ui/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();
    const x = "enter code";
    return <Page>{t("Main page")}</Page>;
};

export default MainPage;
