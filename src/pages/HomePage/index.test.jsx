import {describe, it, expect, beforeEach} from 'vitest';
import { render, screen } from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import HomePage from '.';

describe('HomePage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the greeting', () => {
    render(<HomePage />);
    const greeting = screen.getByText(/Good afternoon user, the time now is:/i);
    expect(greeting).toBeInTheDocument();
  });

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
  });
