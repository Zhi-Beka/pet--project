import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ListBox } from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ListBox>;

const items = [
    { value: "1", content: "mnhbgfvd", disabled: false },
    { value: "11", content: "jmnhbgmnhd", disabled: false },
    { value: "12", content: "nhbgfvd", disabled: true },
    { value: "13", content: "qazwsdxd", disabled: false },
];

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox
        onChange={(value) => console.log(value)}
        items={items}
        defaultValue='Выберите значение'
        value={undefined}
    />
);

export const Light = Template.bind({});
Light.args = {
    value: "text",
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    value: "text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
