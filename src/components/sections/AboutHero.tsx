import ImagePlaceholder from "../common/ImagePlaceholder"
//import cursorSvg from "../../assets/images/cursor.svg" <img src={cursorSvg}/>
import "../../styles/AboutHero.css"

function AboutHero() {
    return(
        <div className="about-container">
            <div className="about-top">

                <div className="about-text">
                    <h1 className="about-title">
                        <span className="about-black-gradient">About </span> 
                        <span className="about-orange-gradient">ACM Design</span>
                    </h1>
                    <h2 className="about-subtitle">
                        Form follows function
                    </h2>
                    <p className="about-body">
                        Our mission is to design, manage, and support the visual identity of ACM at
                        UCLA. We create the club's branding, event banners, and more elements,
                        while also doing workshops to teach UI/UX to the UCLA community.
                    </p>
                </div>

                {/*Illustration*/}
                <div className="about-illustration">
                    <ImagePlaceholder src="/src/assets/images/about/Fox-Graphic.png" width="548px" height="413px"/>
                    <div className="fox-cursor">
                        <img src="/src/assets/images/cursor.svg"/>
                    </div>
                </div>

            </div>

            {/*Group photo*/}
            <div className="about-photo">
                <ImagePlaceholder src="/src/assets/images/about/Group-Photo.png" width="100%" height="500px"/>
            </div>

        </div>
    )
}
export default AboutHero