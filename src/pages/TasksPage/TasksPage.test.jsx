import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import {UserProvider} from '../../contexts/user'
import { ThemeProvider } from "../../contexts/themes";
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers);

import TasksPage from '.';

describe("Tasks Page", () => {
    beforeEach(() => {
        render(
            <UserProvider>
                <ThemeProvider>
                <BrowserRouter>
                    <TasksPage />
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
        expect(heading[0].textContent).toBe("Ready to get started on some tasks?")
    })

    it("Displays the categories message", () => {
        const heading = screen.getAllByRole('heading')
        expect(heading[1]).toBeInTheDocument();
        expect(heading[1].textContent).toBe("Here are your categories:")
    })

    it('Displays the back and add task buttons', () => {
        const Buttons = screen.getAllByRole('button')
         expect(Buttons[0]).toBeInTheDocument()
         expect(Buttons[0].textContent).toBe('Back')
         expect(Buttons[1]).toBeInTheDocument()
         expect(Buttons[1].textContent).toBe('Add Task')
    })
    
})
