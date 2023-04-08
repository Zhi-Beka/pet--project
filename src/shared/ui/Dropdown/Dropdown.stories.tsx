import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Dropdown } from "./Dropdown";

export default {
    title: "shared/Dropdown",
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Dropdown>;

const items = [
    { value: "1", content: "mnhbgfvd", disabled: false },
    { value: "11", content: "jmnhbgmnhd", disabled: false },
    { value: "12", content: "nhbgfvd", disabled: true },
    { value: "13", content: "qazwsdxd", disabled: false },
];

const Template: ComponentStory<typeof Dropdown> = (...args) => (
    <Dropdown className='dropdown' trigger='text' items={items} />
);

export const Light = Template.bind({});
// Light.args = {
//     value: "text",
// };
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
// Dark.args = {
//     value: "text",
// };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
