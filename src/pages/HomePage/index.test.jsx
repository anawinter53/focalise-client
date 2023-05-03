import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

//import index from './';
import HomePage from '.';

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders a greeting message', () => {
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeInTheDocument();
  });
});

