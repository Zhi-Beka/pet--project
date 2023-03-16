import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleTextBlock.module.scss";

interface ArticleTextBlockProps {}

const ArticleTextBlock = (props: ArticleTextBlockProps) => {
    const { t } = useTranslation("");

    // eslint-disable-next-line i18next/no-literal-string
    return <div className={classNames("", {}, [])}>ArticleTextBlock</div>;
};
export default ArticleTextBlock;
