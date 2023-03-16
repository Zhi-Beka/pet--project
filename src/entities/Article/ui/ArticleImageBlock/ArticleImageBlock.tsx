import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticleImageBlock.module.scss";

interface ArticleImageBlockProps {}

const ArticleImageBlock = (props: ArticleImageBlockProps) => {
    const { t } = useTranslation("");

    // eslint-disable-next-line i18next/no-literal-string
    return <div className={classNames("", {}, [])}>ArticleImageBlock</div>;
};
export default ArticleImageBlock;
