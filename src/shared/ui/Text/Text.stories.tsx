import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, themeText } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "title ipsum lorem",
    text: "desciption description",
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "title ipsum lorem",
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "title ipsum lorem",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "title ipsum lorem",
    text: "desciption description",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: "title ipsum lorem",
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: "title ipsum lorem",
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    text: "title ipsum lorem",
    title: "decoration decoration",
    theme: themeText.ERROR,
};
