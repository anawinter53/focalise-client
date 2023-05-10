import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);
import RegisterPage from '.';
import {UserProvider} from '../../contexts/user'
import { ThemeProvider } from "../../contexts/themes";

describe("Login Page", () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <ThemeProvider>
                <BrowserRouter>
                    <RegisterPage />
                </BrowserRouter>
                </ThemeProvider>
            </UserProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it('Displays the username input box', () => {
        const username = screen.getAllByRole('textbox')
        expect(username[0]).toBeInTheDocument()
        expect(username[0].type).toBe('text')
    })

    it('Displays the Email input box', () => {
        const email = screen.getAllByRole('textbox')
        expect(email[1]).toBeInTheDocument()
        expect(email[1].type).toBe('email')
    })

    it("Displays the submit button", () => {
        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument();
        expect(submitButton.type).toBe('submit')
    })

    it('displays the message to Login if an account is already held', () => {
        const registerMessage = screen.getByRole('link')
        expect(registerMessage).toBeInTheDocument()
        expect(registerMessage.href).toBe('http://localhost:3000/login')
    })
})
