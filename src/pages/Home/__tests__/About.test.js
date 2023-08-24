import { render, screen } from "@testing-library/react";
import { About } from "../About";


describe('render About component', () => { 

    test("test whether about information exists", ()=> {
        render(<About />)

        // check if texts are in the about page
        expect(screen.getByText(/about/i)).toBeInTheDocument()
        expect(screen.getByText(/adrian & mario/i)).toBeInTheDocument()

        // check if images are in the about page
        expect(screen.getByAltText(/mario & adrian 1/i)).toBeInTheDocument()
        expect(screen.getByAltText(/mario & adrian 2/i)).toBeInTheDocument()
    })

 })
