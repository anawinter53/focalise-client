import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
import 'jest-localstorage-mock';
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
    localStorage.clear();
  });

  it('renders unique text', () => {
    const header = screen.getByText(/Good afternoon user, the time now is:/i);
    expect(header).toBeInTheDocument();
  });
});


