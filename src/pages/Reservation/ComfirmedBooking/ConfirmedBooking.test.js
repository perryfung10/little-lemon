import { render, screen } from '@testing-library/react';
import { ConfirmedBooking, SuccessfulPage } from './ConfirmedBooking';
import { MemoryRouter } from 'react-router-dom';


describe('render Successful Page', () => { 

    test('test whether successful title exists', () => { 

        render(
        <MemoryRouter>
            <ConfirmedBooking />
        </MemoryRouter>
        )

        expect(screen.getByText(/successful booking/i)).toBeInTheDocument()

     })

    //  test('test whether the user data stored in browser local storage', () => { 


    //   })

 })