import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country/models/types/country";
import { Currency } from "entities/Currency/models/currency";
import avatar from "shared/assets/tests/7228778.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "dev",
        first: "Jiba",
        lastName: "AAA",
        age: 22,
        country: Country.Armenia,
        currency: Currency.USD,
        city: "rio",
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: "error",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
