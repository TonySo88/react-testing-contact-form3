import React from 'react';
import { render, screen } from "@testing-library/react"
import App from './App'

test('contains input', () => {
    render(<App/>);

    const input = screen.getByText(/first name/i)

    expect(input).toBeInTheDocument();

    expect(input).toHaveTextContent(/first Name/i)

    expect(input).not.toBeNull()
})