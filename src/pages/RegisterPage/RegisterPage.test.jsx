import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);
import RegisterPage from '.';
import {UserProvider} from '../../context/index'
import { ThemeProvider } from "../../contexts";

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

    it("Displays the page heading", () => {
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })

    it('Displays the username input box', () => {
        const username = screen.getAllByRole('textbox')
        expect(username[0]).toBeInTheDocument()
        expect(username[0].type).toBe('text')
        expect(username[0].placeholder).toBe('Username')
    })

    it('Displays the Email input box', () => {
        const email = screen.getAllByRole('textbox')
        expect(email[1]).toBeInTheDocument()
        expect(email[1].type).toBe('email')
        expect(email[1].placeholder).toBe('Email')
    })

    it('Displays the password input', () => {
        const password = screen.getByPlaceholderText('Password')
        expect(password).toBeInTheDocument()
        expect(password.type).toBe('password')
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

    // it('Displays the security message beneath the email input', () => {
    //     const securityMessage = screen.getByText("We'll never share your email with anyone else.")
    //     expect(securityMessage).toBeInTheDocument()
    //     expect(securityMessage.textContent).toBe("We'll never share your email with anyone else.")
    // })

    // it('Displays the password input box', () => {
    //     const passwordInput = screen.getByPlaceholderText('password')
    //     expect(passwordInput).toBeInTheDocument()
    //     expect(passwordInput.id).toBe('Password1')
    // })
})
