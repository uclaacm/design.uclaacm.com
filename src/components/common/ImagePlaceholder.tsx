import "../../styles/ImagePlaceholder.css"

interface ImagePlaceholderProps {
    src?: string
    width?: string
    height?: string
}

function ImagePlaceholder({ src = "/images/blank.png", width = "100px", height = "100px" }: ImagePlaceholderProps) {
    return (
        <div id="ImagePlaceholder" style={{ width, height }}>
            <img src={src} alt=""/>
        </div>
    )
}
export default ImagePlaceholder