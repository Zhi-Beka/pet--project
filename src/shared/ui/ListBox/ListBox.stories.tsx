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
    decorators: [
        (Story) => (
            <div style={{ padding: "100px" }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const items = [
    { value: "1", content: "mnhbgfvd", disabled: false },
    { value: "11", content: "jmnhbgmnhd", disabled: false },
    { value: "12", content: "nhbgfvd", disabled: true },
    { value: "13", content: "qazwsdxd", disabled: false },
];

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
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

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: "text",
    direction: "bottom left",
    items,
};
export const bottomRight = Template.bind({});
bottomRight.args = {
    value: "text",
    direction: "bottom right",
    items,
};
export const topRight = Template.bind({});
topRight.args = {
    value: "text",
    direction: "top right",
    items,
};
export const topLeft = Template.bind({});
topLeft.args = {
    value: "text",
    direction: "top left",
    items,
};
