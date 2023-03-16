import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleCodeBlock.module.scss";

interface ArticleCodeBlockProps {}

const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
    const { t } = useTranslation("");

    // eslint-disable-next-line i18next/no-literal-string
    return <div className={classNames("", {}, [])}>ArticleCodeBlock</div>;
};
export default ArticleCodeBlock;
