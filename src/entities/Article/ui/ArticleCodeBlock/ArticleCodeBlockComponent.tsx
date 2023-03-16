import { ArticleCodeBlock } from "entities/Article/models/types/article";
import { memo } from "react";
import Code from "shared/ui/Code/Code";

interface ArticleCodeBlockProps {
    block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockProps) => {
    const { block } = props;

    return <Code textCode={block.code} />;
});
export default ArticleCodeBlockComponent;
