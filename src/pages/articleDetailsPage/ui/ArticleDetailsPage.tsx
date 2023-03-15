/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation("");

    return <div className={classNames("", {}, [])}>ArticleDetailsPage</div>;
};
export default ArticleDetailsPage;
