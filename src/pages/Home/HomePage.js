import { About } from "./About"
import { Dishes } from "./Dishes"
import { Hero } from "./Hero"
import { Testimonials } from "./Testimonials"

export const HomePage = () => {


    return (
        <>
            <Hero />
            <Dishes />
            <Testimonials />
            <About />
        </>
    )
}