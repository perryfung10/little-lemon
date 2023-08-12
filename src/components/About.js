import "../CSS/About.css"
import marioAdrian1 from "../assets/Mario-and-Adrian/Mario and Adrian b.jpg"
import marioAdrian2 from "../assets/Mario-and-Adrian/Mario and Adrian A.jpg"

export const About = () => {


    return (
        <section className="about">
            <article>
                <div className="about-texts">   
                    <h1 className="about-title">About</h1>
                    <h2 className="founders">Adrian & Mario</h2>
                    <p className="founders-description">
                    known for their meticulous attention to detail and technique, had honed their skills working in Michelin-starred restaurants around the world. Their culinary journey had taken them to various cultures, allowing them to master the art of fusing diverse flavors and creating harmonious culinary symphonies on the plate.
                    </p>
                </div>
                <div className="founders-photos">
                    <img src={marioAdrian1} alt="" className="photo1" />
                    <img src={marioAdrian2} alt="" className="photo2" />
                </div>
            </article>
        </section>
    )
}