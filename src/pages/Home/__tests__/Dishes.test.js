import { render, screen } from "@testing-library/react";
import { Dishes } from "../Dishes";
import { MemoryRouter } from "react-router-dom";


describe('render Dishes component', () => { 

    test("test whether it displays all information needed in a card", ()=> {
        
        render(
        <MemoryRouter>
             <Dishes />
        </MemoryRouter>
       )

        // check if title exists
        expect(screen.getByText(/this week specials/i)).toBeInTheDocument()

        //check if Online menu link navigates to order online page
        const onlineMenuBtn = screen.getByText(/online menu/i);
        expect(onlineMenuBtn).toBeInTheDocument()
        expect(onlineMenuBtn.href).toContain("/order-online");

        // check of a dish card contains all information needed
        expect(screen.getByAltText(/greeksalad/i)).toBeInTheDocument()
        expect(screen.getByText(/greek salad/i)).toBeInTheDocument()
        expect(screen.getByText(/greek salad/i)).toBeInTheDocument()
        
        const orderDeliveryBtn = screen.getAllByText(/order delivery/i)
        expect(orderDeliveryBtn.length).toBe(3)
        expect(screen.getByTestId(/dish-order/i).href).toContain("/order-online")


    })

 })
