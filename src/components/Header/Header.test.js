import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';



describe("test the app", ()=> {

  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

  // check if nav bar exists with corresponding links
    const homeNavLink = screen.getByText(/home/i);
    expect(homeNavLink).toBeInTheDocument();
    expect(homeNavLink.href).toContain("/");

    const menuNavLink =  screen.getByText(/menu/i);
    expect(menuNavLink).toBeInTheDocument();
    expect(menuNavLink.href).toContain("/menu");

    const reservationNavLink = screen.getByText(/reservation/i);
    expect(reservationNavLink).toBeInTheDocument();
    expect(reservationNavLink.href).toContain("/reservation")

    
    const orderOnlineNavLink = screen.getByText(/order online/i);
    expect(orderOnlineNavLink).toBeInTheDocument();
    expect(orderOnlineNavLink.href).toContain("/order-online");

    const loginNavLink = screen.getByText(/login/i);
    expect(loginNavLink).toBeInTheDocument();
    expect(loginNavLink.href).toContain("/login");
  });

  
  
  

  

})




