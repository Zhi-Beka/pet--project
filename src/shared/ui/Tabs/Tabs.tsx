import { ArticleType } from "entities/Article/models/types/article";
import { memo, ReactNode } from "react";
import Card, { CardTheme } from "../Card/Card";

import cls from "./Tabs.module.scss";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

const Tabs = memo((props: TabsProps) => {
    const { tabs, value, onTabClick } = props;
    const handleTab = (tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    };
    return (
        <div className={cls.Tabs}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINED
                    }
                    onClick={handleTab(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
export default Tabs;
