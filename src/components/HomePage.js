import { Hero } from "./Hero"
import { About } from "./About"
import { Dishes } from "./Dishes"
import { Testimonials } from "./Testimonials"
import { Main } from "./Main"

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