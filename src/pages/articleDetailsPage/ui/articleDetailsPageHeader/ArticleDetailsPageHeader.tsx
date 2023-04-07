import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleData } from "entities/Article";
import { getCanEditArticle } from "pages/articleDetailsPage/model/selector/article";
import cls from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {}

const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const userData = useSelector(getUserAuthData);
        const article = useSelector(getArticleData);
        const canEdit = useSelector(getCanEditArticle);

        const backToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.articles_details}${article?.id}/edit`);
        }, [article?.id, navigate]);

        return (
            <div className={classNames(cls.ArticleDetailsPageHeader, {}, [])}>
                <Button onClick={backToList}>{t("Back")}</Button>
                {canEdit && (
                    <Button
                        onClick={onEditArticle}
                        theme={ThemeButton.OUTLINE}
                        className={cls.editBtn}
                    >
                        {t("Edit")}
                    </Button>
                )}
            </div>
        );
    }
);
export default ArticleDetailsPageHeader;
