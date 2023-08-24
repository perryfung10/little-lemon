import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";
import { MemoryRouter } from "react-router-dom";


describe('render Hero component', () => { 

    test("test whether information of Little Lemon company are in hero section", ()=> {
        
        render(
            <MemoryRouter>
                <Hero/>

            </MemoryRouter>
        )

        // check if title & subtitle exist in the Hero section
        expect(screen.getByRole(/heading/i, {name: /little lemon/i})).toBeInTheDocument()
        expect(screen.getByRole(/heading/i, {name: /chicago/i})).toBeInTheDocument()

        // check if reserve link navigates to reservation page 
        const reserveButton = screen.getByText(/reserve a table/i);
        expect(reserveButton).toBeInTheDocument();
        expect(reserveButton.href).toContain("/reservation")

        // check if the little lemon restaurant pic diplays in the page
        expect(screen.getByAltText(/little lemon restaurant/i)).toBeInTheDocument()


    })

 })
