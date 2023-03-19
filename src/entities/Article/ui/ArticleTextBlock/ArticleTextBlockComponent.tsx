import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ArticleTextBlock } from "entities/Article/models/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = (props: ArticleTextBlockProps) => {
    const { t } = useTranslation("");
    const { block, className } = props;

    // eslint-disable-next-line i18next/no-literal-string
    return (
        <div className={classNames(cls.textBox, {}, [className])}>
            {block.title && <Text title={block.title} />}
            {block.paragraphs.map((el) => {
                return <Text key={el} text={el} align={TextAlign.LEFT} />;
            })}
        </div>
    );
};
export default ArticleTextBlockComponent;
