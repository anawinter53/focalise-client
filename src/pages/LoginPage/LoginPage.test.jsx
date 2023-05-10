import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);
import LoginPage from '.';
import {UserProvider} from '../../contexts/user'
import { ThemeProvider } from "../../contexts/themes";

describe("Login Page", () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <ThemeProvider>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
                </ThemeProvider>
            </UserProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays the email address label", () => {
        const email = screen.getByText('Username')
        expect(email).toBeInTheDocument();
        expect(email.textContent).toBe('Username')
    })

    it('Displays the password label', () => {
        const password = screen.getByText('Password')
        expect(password).toBeInTheDocument();
        expect(password.textContent).toBe('Password')
    })

    it('Displays the email text input box', () => {
        const emailInput = screen.getByRole('textbox')
        expect(emailInput).toBeInTheDocument()
        expect(emailInput.id).toBe('Email1')
    })

    it('Displays the security message beneath the email input', () => {
        const securityMessage = screen.getByText("We'll never share your details with anyone else.")
        expect(securityMessage).toBeInTheDocument()
        expect(securityMessage.textContent).toBe("We'll never share your details with anyone else.")
    })

    it('Displays the password input box', () => {
        const passwordInput = screen.getByPlaceholderText('password')
        expect(passwordInput).toBeInTheDocument()
        expect(passwordInput.id).toBe('Password1')
    })

    it('Displays the submit button', () => {
        const submitButton = screen.getByRole('button')
        expect(submitButton.type).toBe('submit')
        expect(submitButton.className).toBe('btn border')
    })

    it('displays the message to register if an account is not already held', () => {
        const registerMessage = screen.getByRole('link')
        expect(registerMessage).toBeInTheDocument()
        expect(registerMessage.href).toBe('http://localhost:3000/register')
    })
})
