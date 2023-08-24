import { render, screen } from '@testing-library/react';
import { Testimonials } from '../Testimonials';


describe("render the Testimonials component", () => {



    test("check if a testimonail card infomation display", ()=> {
        

        render(<Testimonials />)

        // check if Testimonial title exists
        expect(screen.getByText(/testimonials/i)).toBeInTheDocument();

        // check if user name Alan  is in the page
        expect(screen.getByText(/alan/i)).toBeInTheDocument();

        // check if there are 4 reviews
        expect(screen.getAllByTestId(/review/i).length).toBe(4);

        
    })

})