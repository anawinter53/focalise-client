import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);
import LoginPage from '.';

describe("Login Page", () => {
    beforeEach(() => {
        render(
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    // it('renders Login component', () => {
    //     render(<LoginPage />);
    //     const loginComponent = screen.getByRole('button', {name: /login/i});
    //     expect(loginComponent).toBeInTheDocument();
    //   });

})
