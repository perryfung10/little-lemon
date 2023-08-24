import { render, screen } from '@testing-library/react';
import { BookingPage } from './BookingPage';
import { MemoryRouter } from 'react-router-dom';



describe('render the BookPage component', () => { 
    
    test('test there is a Booking title in the page', () => { 

        const mockData = {
            lastName: {
              value: "",
              error: "",
            },
            firstName: {
              value: "",
              error: "",
            },
            email: {
              value: "",
              error: "",
            },
            date:{ 
              value: "",
              error: ""
            },
            time: {
              value: "",
              error: "",
            },
            numberOfGuests : {
              value: 1,
              error: "",
            },
            occasion: "",
        }

        const mockSetFormData = jest.fn();
        const mockAvailableTimes = jest.fn()
        const mockDispatch = jest.fn()

        render(
            <MemoryRouter>
                <BookingPage formData={mockData} setFormData={mockSetFormData} 
                    availableTimes={mockAvailableTimes} dispatch={mockDispatch}/>
            </MemoryRouter>)

        expect(screen.getByText(/bookings/i)).toBeInTheDocument()

     })


 })