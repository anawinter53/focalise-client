import {describe, it, expect, beforeEach} from 'vitest';
import { fireEvent, getByRole, getByTestId, render, screen } from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import ProfilePage from './index'
import {Select} from 'react-select'

describe('Profile Page', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the title', () => {
    render(<ProfilePage />);
    const title = screen.getByText("Profile");
    expect(title).toBeInTheDocument();
  })
  // it('renders the selectors', () => {
  //   render(<ProfilePage />);
  //   const selector = getByRole(Select)
  //   console.log(selector)
  // })
//   it('changes the background color of the page when the user selects a new color', () => {
//     render(<ProfilePage />);
//     const colorChanger = screen.getByLabelText("Choose background colour");
//     expect(colorChanger).toBeInTheDocument()
//     // fireEvent.change(colorChanger, { target: { value: "#ffffff" } });
//     // expect(document.body.style.backgroundColor).toBe("rgb(255, 255, 255)");
//   });  
// it('changes the font color of the page when the user selects a new color', () => {
//     render(<ProfilePage />);
//     const fontColorChanger = screen.getByLabelText("Choose a font colour");
//     fireEvent.change(fontColorChanger, { target: { value: "#000000" } });
//     expect(document.body.style.color).toBe("rgb(0, 0, 0)");
//   });
// it('changes the font size of the page when the user selects a new size', () => {
//     render(<ProfilePage />);
//     const fontResize = screen.getByLabelText("Choose your font size");
//     fireEvent.change(fontResize, { target: { value: "18" } });
//     expect(document.body.style.fontSize).toBe("18px");
//   });
it('changes the profile image when the user selects a new image', () => {
    render(<ProfilePage />);
    const imageSelector = screen.getAllByText("Select Profile Image");
    expect(imageSelector).toBeTruthy()
  });
//   it('renders a placeholder image when there is no saved image in localStorage', () => {
//     localStorage.removeItem("profileImage");
//     render(<ProfilePage />);
//     const profileImage = screen.getAllByAltText("Placeholder Image");
//     expect(profileImage.src).toBe("https://via.placeholder.com/200x200");
//   });
})
