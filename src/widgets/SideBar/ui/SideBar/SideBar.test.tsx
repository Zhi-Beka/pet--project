/* eslint-disable i18next/no-literal-string */
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { SideBar } from './SideBar';

describe('testing sidebar', () => {
    test('should render sidebar', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should toggle classname', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('toggleBtn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
