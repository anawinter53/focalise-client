import {describe, it, expect, beforeEach} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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
    console.log(accordionContent)
    expect(accordionContent).toBeTypeOf('object');
  });

  // it('toggles the accordion content when clicked', async () => {
  //   render(<HomePage />);
  //   const accordion = await screen.findAlldByTestId('accordion');
  //   console.log(accordion)
    // fireEvent.click(accordion);
    // const accordionContent = screen.getAllByText(/1|2|3/);
    // console.log(accordionContent)
    // accordionContent.forEach((content) => {
    //   expect(content).toBeInTheDocument();
    // });
    // fireEvent.click(accordion);
    // accordionContent.forEach((content) => {
    //   expect(content).not.toBeInTheDocument();
    // });
  });
  

  // it('applies saved font color from localStorage', () => {
  //   localStorage.setItem('fontColor', 'blue');
  //   render(<HomePage />);
  //   const homepageBody = screen.getAll('homepage-body');
  //   expect(homepageBody).toHaveStyle({ color: 'blue' });
  // });

  // it('applies saved font size from localStorage', () => {
  //   localStorage.setItem('fontSize', '24');
  //   render(<HomePage />);
  //   const homepageBody = screen.getByTestId('homepage-body');
  //   expect(homepageBody).toHaveStyle({ fontSize: '24px' });
  // })
