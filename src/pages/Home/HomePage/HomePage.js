import { About } from "./../About/About"
import { Dishes } from "./../Dishes/Dishes"
import { Hero } from "./../Hero/Hero"
import { Testimonials } from "./../Testimonials/Testimonials"

export const HomePage = ({handleScrollToTop}) => {


    return (
        <>
            <Hero handleScrollToTop={handleScrollToTop}/>
            <Dishes handleScrollToTop={handleScrollToTop}/>
            <Testimonials />
            <About />
        </>
    )
}