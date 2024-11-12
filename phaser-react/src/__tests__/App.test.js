import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useMachine } from '@xstate/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Header from '../routes/Header';
import Catalyst from '../states/flow1/Catalyst';
import Objective from '../states/flow1/Objective';
import FindCoyote from '../states/flow1/FindCoyote';
import ChooseVisas from '../states/flow2/ChooseVisas';

// Mock the Header component if necessary
jest.mock('../routes/Header', () => () => <header>Header</header>);

// Mock each scene component
jest.mock('../states/flow1/Catalyst', () => () => <div>Catalyst Component</div>);
jest.mock('../states/flow1/Objective', () => () => <div>Objective Component</div>);
jest.mock('../states/flow1/FindCoyote', () => () => <div>Find Coyote Component</div>);
jest.mock('../states/flow2/ChooseVisas', () => () => <div>Choose Visas Component</div>);
// Add more mocks for other scene components as needed

// Mock the useMachine hook
jest.mock('@xstate/react', () => ({
  useMachine: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    // Set default return value for useMachine
    useMachine.mockReturnValue([
      { 
        value: { catalyst_earth: true }, 
        context: { canAffordUni: true, fluentInEnglish: false, visaType: 'student' } 
      },
      jest.fn()  // mock the send function
    ]);
  });

  test('renders the Header component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  test('renders Catalyst component for top-level state', () => {
    useMachine.mockReturnValue([
      { value: { catalyst_earth: true }, context: {} },
      jest.fn(),
    ]);
    render(
      <BrowserRouter>
        <Catalyst />
      </BrowserRouter>
    );
    expect(screen.getByText('Catalyst Component')).toBeInTheDocument();
  });

  test('renders Objective component for top-level objective state', () => {
    useMachine.mockReturnValue([
      { value: { objective: true }, context: {} },
      jest.fn(),
    ]);
    render(
      <BrowserRouter>
        <Objective />
      </BrowserRouter>
    );
    expect(screen.getByText('Objective Component')).toBeInTheDocument();
  });

  test('renders FindCoyote component for illegal route state', () => {
    useMachine.mockReturnValue([
      { value: { illegal_route: 'find_coyote' }, context: {} },
      jest.fn(),
    ]);
    render(
      <BrowserRouter>
        <FindCoyote />
      </BrowserRouter>
    );
    expect(screen.getByText('Find Coyote Component')).toBeInTheDocument();
  });

  test('renders ChooseVisas component for legal route state', () => {
    useMachine.mockReturnValue([
      { value: { legal_route: 'choose_visas' }, context: {} },
      jest.fn(),
    ]);
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Choose Visas Component')).toBeInTheDocument();
  });
  
  // Additional tests can follow for each specific state scenario
});
