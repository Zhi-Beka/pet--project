import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Page from "widgets/Page/Page";
import cls from "./PageNotFound.module.scss";

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound = ({ className }: PageNotFoundProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.pageNotFound, {}, [className])}>
            {t("Page not found")}
        </Page>
    );
};
