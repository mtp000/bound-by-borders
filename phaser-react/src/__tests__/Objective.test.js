// Objective.test.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Objective from '../states/flow1/Objective';

// Mock function to simulate the `send` prop
const mockSend = jest.fn();

describe('Objective Component', () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <Objective send={mockSend} />;
        </BrowserRouter>
        );
    });

    test('renders heading and description', () => {
        expect(screen.getByRole('heading', { name: /Objective/i })).toBeInTheDocument();
        expect(screen.getByText(/Your goal is to immigrate to the US from Costa Rica/i)).toBeInTheDocument();
    });

    test('renders Illegal Route and Legal Route buttons', () => {
        expect(screen.getByRole('button', { name: /Illegal Route/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Legal Route/i })).toBeInTheDocument();
    });

    test('calls send with ILLEGAL_OPTION_SELECTED when Illegal Route button is clicked', () => {
        // Use getAllByRole to find all buttons and select the first one (index 0)
        const [illegalButton] = screen.getAllByRole('button', { name: /route/i });
        fireEvent.click(illegalButton);
        expect(mockSend).toHaveBeenCalledWith({ type: "ILLEGAL_OPTION_SELECTED" });
    });

    test('calls send with LEGAL_OPTION_SELECTED when Legal Route button is clicked', () => {
        // Use getAllByRole to find all buttons and select the second one (index 1)
        const [, legalButton] = screen.getAllByRole('button', { name: /route/i });
        fireEvent.click(legalButton);
        expect(mockSend).toHaveBeenCalledWith({ type: "LEGAL_OPTION_SELECTED" });
    });
});
