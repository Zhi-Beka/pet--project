/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('testing button', () => {
    test('should work with classnames', () => {
        const expected = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expected);
    });

    test('should render text', () => {
        render(<Button>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });

    test('should render theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
    });
});
