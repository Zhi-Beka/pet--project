/* eslint-disable i18next/no-literal-string */

import { useParams } from "react-router-dom";
import Page from "widgets/Page/Page";

const ArticleEditPage = () => {
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page>
            {isEdit ? `Editable page with id:${id}` : "Create new article page"}
        </Page>
    );
};

export default ArticleEditPage;
