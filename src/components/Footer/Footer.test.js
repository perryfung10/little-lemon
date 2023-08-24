import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { MemoryRouter } from "react-router-dom";

describe("test Footer component", ()=> {


    test('render Footer component with correct doormat navigation & social media links', () => { 

        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        
        )
        // check if the doormat navigation exists
        const homeDoormatNav = screen.getByText(/Home/i);
        const menuDoormatNav = screen.getByText(/Menu/i);
        const reservationDoormatNav = screen.getByText(/Reservation/i);
        const orderOnlineDoormatNav = screen.getByText(/Order Online/i);
        const loginDoormatNav = screen.getByText(/Login/i);

        expect(homeDoormatNav).toBeInTheDocument();
        expect(menuDoormatNav).toBeInTheDocument();
        expect(reservationDoormatNav).toBeInTheDocument();
        expect(orderOnlineDoormatNav).toBeInTheDocument();
        expect(loginDoormatNav).toBeInTheDocument();

        // check if social media links of Little Lemon exists
        const instagram = screen.getByTestId("instagram");
        const twitter = screen.getByTestId("twitter");
        const youtube = screen.getByTestId("youtube");

        expect(instagram.href).toContain("www.instagram.com/littlelemonmeta/");
        expect(twitter.href).toContain("twitter.com/littlelemonmeta");
        expect(youtube.href).toContain("www.youtube.com/channel/UCrd6OWO0IpuVjibO4Q1IwwQ");
    })
})