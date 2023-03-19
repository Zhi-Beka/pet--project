import { classNames } from "shared/lib/classNames/classNames";
import { ArticleList, ViewType } from "entities/Article";

interface ArticlesPageProps {}

const ArticlesPage = (props: ArticlesPageProps) => {
    return (
        <div className={classNames("", {}, [])}>
            <ArticleList view={ViewType.LIST} articles={[]} />
        </div>
    );
};
export default ArticlesPage;
