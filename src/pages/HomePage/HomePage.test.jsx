import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import HomePage from '.';

describe("Home Page", () => {
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

    it('renders the current time', () => {
        render(<HomePage />);
        const timeDisplay = screen.getAllByTestId('timeDisplay')
        expect(timeDisplay).toBeTruthy();
      });

      it('renders the accordion title', () => {
        render(<HomePage />);
        const accordionTitle = screen.getAllByText(/Here are some tasks you can complete today/i);
        expect(accordionTitle).toBeTruthy();
      });
    
      it('does not initially show the accordion content', () => {
        render(<HomePage />);
        const accordionContent = screen.findByTestId('accordion')
        expect(accordionContent).toBeTypeOf('object');
      });
})
