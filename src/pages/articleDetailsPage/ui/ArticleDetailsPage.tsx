/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleDetails } from "entities/Article";

import { useParams } from "react-router-dom";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { t } = useTranslation("article_details");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames("", {}, [])}>
                {t("article not found")}
            </div>
        );
    }
    return (
        <div className={classNames("", {}, [])}>
            <ArticleDetails id={id} />
        </div>
    );
};
export default ArticleDetailsPage;
