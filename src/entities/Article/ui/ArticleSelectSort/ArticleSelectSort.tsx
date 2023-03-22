import { memo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";

import { useTranslation } from "react-i18next";
import {
    OrderType,
    SortField,
} from "pages/articlesPage/model/types/articlesPageStateSchema";

interface ArticleSelectSortProps {
    sort: SortField;
    order: OrderType;
    onChangeOrder: (newOrder: OrderType) => void;
    onChangeSort: (newSort: SortField) => void;
}

export const ArticleSelectSort = memo((props: ArticleSelectSortProps) => {
    const { t } = useTranslation();
    const { sort, order, onChangeOrder, onChangeSort } = props;

    const orderOptions: SelectOption<OrderType>[] = [
        {
            value: "asc",
            content: t("ascending"),
        },
        {
            value: "desc",
            content: t("descending"),
        },
    ];

    const sortFieldOptions: SelectOption<SortField>[] = [
        {
            value: SortField.CREATED,
            content: t("date"),
        },
        {
            value: SortField.TITLE,
            content: t("name"),
        },
        {
            value: SortField.VIEWS,
            content: t("views"),
        },
    ];

    return (
        <>
            <Select
                options={orderOptions}
                label={t("sort by")}
                value={order}
                onChange={onChangeOrder}
            />
            <Select
                options={sortFieldOptions}
                label={t("sort by")}
                value={sort}
                onChange={onChangeSort}
            />
        </>
    );
});
