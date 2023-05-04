import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import HomePage from '.';

describe("Homepage", () => {
    beforeEach(() => {
        render(
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays a heading", () => {
        const heading = screen.getAllByRole('heading')
        expect(heading[0]).toBeInTheDocument();
        expect(heading[0].textContent).toBe("Good afternoon user, the time now is: ")
    })

    // it("Displays a button that changes location when clicked", async () => {
    //     const button = screen.getByRole('button')
    //     expect(button).toBeInTheDocument();

    //     expect(window.location.href).not.toContain('/signup');
    //     const signup = screen.getByText('Get Started!');
    //     await userEvent.click(signup)
    //     expect(window.location.href).toContain('/signup');
    // })

})
