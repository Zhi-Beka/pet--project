import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import CommentForm from "./CommentForm";

export default {
    title: "features/CommentForm",
    component: CommentForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
    <CommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    sendComment: action("sendComment"),
};
Normal.decorators = [StoreDecorator({})];
