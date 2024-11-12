import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'; 
import DaysPass from '../states/flow1/DaysPass';

// Mock function to simulate the `send` prop
const mockSend = jest.fn();

describe('DaysPass Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <DaysPass send={mockSend} />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mock call history after each test
    });

    test('renders DaysPass component elements', () => {
        // Check that the heading and description are rendered
        expect(screen.getByRole('heading', { name: /Days Pass/i })).toBeInTheDocument();
        expect(screen.getByText(/Days pass as you travel by boat to Nicaragua/i)).toBeInTheDocument();

        // Check that both buttons are rendered
        expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Rethinking illegal immigration/i })).toBeInTheDocument();
    });

    test('calls send function with appropriate actions when buttons are clicked', () => {
        // Simulate clicking the "Continue" button
        fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
        expect(mockSend).toHaveBeenCalledWith({ type: "CONTINUE" });

        // Simulate clicking the "Rethinking illegal immigration" button
        fireEvent.click(screen.getByRole('button', { name: /Rethinking illegal immigration/i }));
        expect(mockSend).toHaveBeenCalledWith({ type: "RESTART" });
    });
});
