import ImagePlaceholder from "../common/ImagePlaceholder";

function AboutUs() {
    return(
        <div style={{ padding: "0 100px" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "2rem" }}>What is ACM Design</p>
            <div style={{ position: "relative" }}>
                <ImagePlaceholder src="/images/blank.png" width="100%" height="400px" />
                <div style={{ position: "absolute", top: "20px", left: "20px", maxWidth: "50%" }}>
                    <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Lorem ipsum dolor sit amet consectetur. Placerat a quam malesuada curabitur. Pharetra nisl nisl commodo venenatis aenean leo euismod. Consequat ipsum ullamcorper in egestas id sagittis. Scelerisque dui nibh mauris bibendum in.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs