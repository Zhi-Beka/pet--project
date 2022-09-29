import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ThemeButton.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'outline',
    theme: ThemeButton.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'outline',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
