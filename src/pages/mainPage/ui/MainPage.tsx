import { useTranslation } from "react-i18next";

import Page from "widgets/Page/Page";
import cls from "./MainPage.module.scss";

const MainPage = () => {
    const { t } = useTranslation();
    const x = "enter code";
    return (
        <Page>
            <h1 className={cls.title}>
                {t("Hello my name is Zhibek! I am a frontend developer :)")}
            </h1>

            <h2 className={cls.text}>
                {t(
                    "Interesting parts you can see in articles and profile page"
                )}
            </h2>
        </Page>
    );
};

export default MainPage;
