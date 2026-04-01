import { useState } from 'react'
import "../../styles/Carousel.css"

interface CarouselProps {
    images: string[]
}

function ImagePlaceholder({ images }: CarouselProps) {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)
    const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

    return (
        <div id="ImagePlaceholder">
            <button className="arrow left" onClick={prev}></button>
            <img src={images[current]} alt="" />
            <button className="arrow right" onClick={next}></button>
            <div className="dots">
                {images.map((_, i) => (
                    <span key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}/>
                ))}
            </div>
        </div>
    )
}
export default ImagePlaceholder
