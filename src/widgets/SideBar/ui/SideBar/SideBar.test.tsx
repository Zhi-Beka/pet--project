/* eslint-disable i18next/no-literal-string */
import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/renderWithRouter/componentRender';
import { SideBar } from './SideBar';

describe('testing sidebar', () => {
    test('should render sidebar', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should toggle class name', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('toggleBtn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
