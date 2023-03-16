/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/models/slice/ArticleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppdispatch";
import { useEffect } from "react";
import { fetchArticleById } from "entities/Article/models/services/fetchArticleById";
import { useSelector } from "react-redux";
import {
    getArticleData,
    getArticleError,
    getArticleIsLoading,
} from "entities/Article/models/selector/getArticleById";
import { Text, themeText } from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
    id: string;
}

const reducers: ReducersList = {
    article_details: articleDetailsReducer,
};

const ArticleDetails = (props: ArticleDetailsProps) => {
    const { id } = props;
    const { t } = useTranslation("");
    const dispatch = useAppDispatch();
    const error = useSelector(getArticleError);
    // const loading = useSelector(getArticleIsLoading);
    const loading = true;
    const data = useSelector(getArticleData);
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (loading) {
        content = (
            <div className={cls.skeletonWrapper}>
                <Skeleton border='50%' width={200} height={200} />
                <Skeleton width='100%' height={31} />
                <Skeleton width='100%' height={31} />
                <Skeleton width='100%' height={231} />
                <Skeleton width='100%' height={231} />
                <Skeleton width='100%' height={231} />
            </div>
        );
    } else if (error) {
        content = (
            <Text theme={themeText.ERROR} title={t("Article not found!")} />
        );
    } else {
        content = <div>ArticleDetails</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
export default ArticleDetails;
