import ImagePlaceholder from "../common/ImagePlaceholder"

function AboutUs() {
    return(
        <div>
            <div style={{display: "flex", alignItems: "center"}}>
            
                <div>
                    <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "48px", fontWeight: "600" }}>
                        About <span style={{ background: "linear-gradient(90deg, #FF7A00, #FFB800)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>ACM Design</span>
                    </h1>
                    <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: "28px", fontWeight: "500" }}>
                        Form Follows function
                    </h2>
                    <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "16px"}}>
                        Our mission is to design, manage, and support the visual identity of ACM at
                        UCLA. We create the club's branding, event banners, and more elements,
                        while also doing workshops to teach UI/UX to the UCLA community.
                    </p>
                </div>

                {/*Illustration*/}
                <div style={{ width: "548px", height: "413px", borderRadius: "20px", backgroundColor: "#e7daca" }}>
                    <ImagePlaceholder src="/images/blank.png" width="548px" height="413px"/>
                </div>

            </div>

            {/*Group photo*/}
            <div style={{ width: "100%", height: "500px", borderRadius: "20px" }}>
                <ImagePlaceholder src="/images/blank.png" width="100%" height="500px"/>
            </div>

        </div>
    )
}
export default AboutUs