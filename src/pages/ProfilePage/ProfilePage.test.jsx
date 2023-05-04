import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import { getByRole, getByTestId, render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import ProfilePage from '.'

describe('Profile Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    )
  })

  afterEach(() => {
    cleanup();
  })

  it('renders the title', () => {
    const title = screen.getByText("Profile");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Profile')
  })
  it('changes the profile image when the user selects a new image', () => {
    const imageSelector = screen.getAllByText("Select Profile Image");
    expect(imageSelector).toBeTruthy()
  });
  it('renders the screen settings section', () => {
    const screenSettings = screen.getByText('Screen settings')
    expect(screenSettings).toBeInTheDocument()
  })
  it('renders the select dropdowns', () => {
    const infoOne = screen.getByText('Email Address')
    const infoTwo = screen.getByText('Profile Name')
    expect(infoOne).toBeInTheDocument()
    expect(infoTwo).toBeInTheDocument()
  })
})
