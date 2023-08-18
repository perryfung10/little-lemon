import { render, screen } from '@testing-library/react';
import App from './App';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';

// describe("test the app.", ()=> {

//   test('renders Header component', () => {
//     render(<Header />);
//     const linkElement = screen.getByText(/home/i);
//     expect(linkElement).toBeInTheDocument();
//   });

// })

describe("test the app", ()=> {
  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  // check if the company logo is here or not

    const homeNav = screen.getByText(/home/i);
    expect(homeNav).toBeInTheDocument();
  });

  // check if nav bar exists with corresponding links

  

})




