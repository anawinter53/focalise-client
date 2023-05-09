import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import {UserProvider} from '../../contexts/user'
import { ThemeProvider } from "../../contexts/themes";
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import SensoryPage from '.';

describe("Sensory Page", () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <ThemeProvider>
                <BrowserRouter>
                    <SensoryPage />
                </BrowserRouter>
                </ThemeProvider>
            </UserProvider>
        )
    })
    
    afterEach(() => {
        cleanup();
    })

    it("Displays the welcome message", () => {
        const heading = screen.getAllByRole('heading')
        expect(heading[0]).toBeInTheDocument();
        expect(heading[0].textContent).toBe("Welcome to the sensory room!")
    })

    it('Displays the subheading', () => {
        const subHeading = screen.getAllByRole('heading')
        expect(subHeading[1]).toBeInTheDocument()
        expect(subHeading[1].textContent).toBe('How long do you want to be here?')
    })

    it('renders the time buttons', () => {
        const timeButtons = screen.getAllByRole('button')
        expect(timeButtons[0]).toBeInTheDocument()
        expect(timeButtons[0].textContent).toBe('5 Minutes')
        expect(timeButtons[1]).toBeInTheDocument()
        expect(timeButtons[1].textContent).toBe('10 Minutes')
        expect(timeButtons[2]).toBeInTheDocument()
        expect(timeButtons[2].textContent).toBe('15 Minutes')
      });

      it('renders the next section of the page', () => {
         fireEvent.click(screen.getByText(/10 minutes/i))
         const heading2 = screen.getByRole('heading')
         expect(heading2.textContent).toBe('What would you like to do?')
         const nextButtons = screen.getAllByRole('button')
         expect(nextButtons[0]).toBeInTheDocument()
         expect(nextButtons[0].textContent).toBe('Music')
         expect(nextButtons[1]).toBeInTheDocument()
         expect(nextButtons[1].textContent).toBe('Animal')
         expect(nextButtons[2]).toBeInTheDocument()
         expect(nextButtons[2].textContent).toBe('Meditation')
      })

      it('renders the final section', () => {
        fireEvent.click(screen.getByText(/10 minutes/i))
        fireEvent.click(screen.getByText(/Music/i))
        const timeDisplay = screen.getByText('10:00')
        expect(timeDisplay).toBeInTheDocument()
      })
})
