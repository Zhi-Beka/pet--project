/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleImageBlock } from "entities/Article/models/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlock.module.scss";

interface ArticleImageBlockProps {
    block: ArticleImageBlock;
}

const ArticleImageBlockComponent = (props: ArticleImageBlockProps) => {
    const { block } = props;

    // eslint-disable-next-line i18next/no-literal-string
    return (
        <div className={cls.Img}>
            {block.title && (
                <Text title={block.title} align={TextAlign.CENTER} />
            )}
            <img alt='article' src={block.src} />
        </div>
    );
};
export default ArticleImageBlockComponent;
