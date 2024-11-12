import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Survey from '../routes/Survey';


describe('Survey Component', () => {
    test('renders form elements correctly with BrowserRouter', () => {
        render(
            <BrowserRouter>
                <Survey />
            </BrowserRouter>
        );
        
        // Check for survey questions
        // expect(screen.findAllByText(/Immigrant/i)).toBeInTheDocument();
        // expect(screen.findAllByAltText(/Non-immigrant/i)).toBeInTheDocument();
        expect(screen.getByText(/Based on the simulation/i)).toBeInTheDocument();
        expect(screen.getByText(/Do you have any additional feedback/i)).toBeInTheDocument();

        // Check for Submit button
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('updates form data on checkbox change', () => {
        render(
            <BrowserRouter>
                <Survey />
            </BrowserRouter>
        );        
        
        const diversityCheckbox = screen.getByRole('checkbox', { name: /divserity/i });
        fireEvent.click(diversityCheckbox);
        
        expect(diversityCheckbox).toBeChecked(); // Assert that checkbox is checked
    });

    test('updates form data on radio button change', () => {
        render(
            <BrowserRouter>
                <Survey />
            </BrowserRouter>
        );

        const yesRadio = screen.getByRole('radio', { name: /yes, i have learned/i });
        fireEvent.click(yesRadio);

        expect(yesRadio).toBeChecked(); // Assert that radio is selected
    });

    test('shows validation error if required field is missing', async () => {
        render(
            <BrowserRouter>
                <Survey />
            </BrowserRouter>
        );
        
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        // Check for validation error message
        expect(screen.getByText(/please select an option for question 3/i)).toBeInTheDocument();
    });

    test('calls handleSubmit and validates form on submit', async () => {
        render(
            <BrowserRouter>
                <Survey />
            </BrowserRouter>
        );
        
        // Fill out required radio button for valid submission
        fireEvent.click(screen.getByRole('radio', { name: /yes, i have learned/i }));

        // Click Submit button
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        // Verify that no validation error is shown
        expect(screen.queryByText(/please select an option for question 3/i)).not.toBeInTheDocument();
    });
});
