/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation("");

    return <div className={classNames("", {}, [])}>ArticlesPage</div>;
};
export default ArticlesPage;
