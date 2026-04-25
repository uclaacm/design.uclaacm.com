import { useState } from 'react'
import "../../styles/Carousel.css"

interface Slide {
    image: string
    title?: string
    body?: string
}

interface CarouselProps {
    slides: Slide[]
}

function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0)

    const n = slides.length
    const prevIdx = (current - 1 + n) % n
    const nextIdx = (current + 1) % n

    const prev = () => setCurrent(prevIdx)
    const next = () => setCurrent(nextIdx)

    const { title, body } = slides[current]

    return (
        <div className="carousel">
            <div className="carousel__track">

                <div className="carousel__side carousel__side--prev" onClick={prev}>
                    <img src={slides[prevIdx].image} alt="" />
                </div>

                <div className="carousel__main">
                    <img src={slides[current].image} alt="" />
                </div>

                <div className="carousel__side carousel__side--next" onClick={next}>
                    <img src={slides[nextIdx].image} alt="" />
                </div>

                <button className="carousel__arrow carousel__arrow--left"  onClick={prev} aria-label="Previous" />
                <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Next" />
            </div>

            <div className="carousel__diamonds">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`carousel__diamond${i === current ? ' carousel__diamond--active' : ''}`}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>

            {(title || body) && (
                <div className="carousel__text" key={current}>
                    {title && <p className="carousel__title">{title}</p>}
                    {body  && <p className="carousel__body">{body}</p>}
                </div>
            )}
        </div>
    )
}

export default Carousel
