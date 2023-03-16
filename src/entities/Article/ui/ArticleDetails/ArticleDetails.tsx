/* eslint-disable indent */
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
import { Text, TextAlign, TextSize, themeText } from "shared/ui/Text/Text";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import {
    ArticleBlock,
    ArticleBlockType,
} from "entities/Article/models/types/article";
import cls from "./ArticleDetails.module.scss";
import EyeIcon from "../../../../shared/assets/icons/eye.svg";
import CalendarIcon from "../../../../shared/assets/icons/calendar.svg";
import ArticleCodeBlockComponent from "../ArticleCodeBlock/ArticleCodeBlockComponent";

import ArticleTextBlockComponent from "../ArticleTextBlock/ArticleTextBlockComponent";
import ArticleImageBlockComponent from "../ArticleImageBlock/ArticleImageBlock";

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
    const loading = useSelector(getArticleIsLoading);

    const data = useSelector(getArticleData);
    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    function renderBlocks(block: ArticleBlock) {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} block={block} />
                );

            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent key={block.id} block={block} />
                );

            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent key={block.id} block={block} />
                );

            default:
                return null;
        }
    }

    if (loading) {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    {" "}
                    <Skeleton
                        border='50%'
                        width={200}
                        height={200}
                        className={cls.avatar}
                    />
                </div>

                <Skeleton width='100%' height={31} className={cls.title} />
                <Skeleton width='100%' height={31} className={cls.skeleton} />
                <Skeleton width='100%' height={231} className={cls.skeleton} />
                <Skeleton width='100%' height={231} className={cls.skeleton} />
                <Skeleton width='100%' height={231} className={cls.skeleton} />
            </>
        );
    } else if (error) {
        content = (
            <Text theme={themeText.ERROR} title={t("Article not found!")} />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={data?.img} className={cls.avatar} />
                </div>

                <Text
                    title={data?.title}
                    text={data?.subtitle}
                    align={TextAlign.LEFT}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <span>
                        <EyeIcon className={cls.icon} />
                        <Text text={String(data?.views)} />
                    </span>
                    <span>
                        <CalendarIcon className={cls.icon} />
                        <Text text={data?.createdAt} />
                    </span>
                </div>

                <div className={cls.blocks}>
                    {data?.blocks.map(renderBlocks)}
                </div>
            </>
        );
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
