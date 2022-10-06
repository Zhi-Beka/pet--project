import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {
    isOpened: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit, optio consequatur esse eos enim eum maxime nostrum laudantium reiciendis sequi natus incidunt ex excepturi, placeat ab saepe corporis tenetur.',
};
ModalPrimary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpened: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit, optio consequatur esse eos enim eum maxime nostrum laudantium reiciendis sequi natus incidunt ex excepturi, placeat ab saepe corporis tenetur.',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
