import ImagePlaceholder from "../common/ImagePlaceholder"

function HeroSection() {
    return(
        <div style={{ position: "relative" }}>
            <div style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}>
                <ImagePlaceholder width="100vw" height="100vh" />
            </div>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h1>Title text</h1>
            </div>
        </div>
    )
}
export default HeroSection