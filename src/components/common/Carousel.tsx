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

function getSlot(idx: number, current: number, n: number) {
    const off = ((idx - current) % n + n) % n
    if (off === 0) return 'center'
    if (off === 1) return 'right'
    if (off === n - 1) return 'left'
    return off < n / 2 ? 'far-right' : 'far-left'
}

function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0)
    const n = slides.length

    const navigate = (target: number) => {
        if (target === current) return
        setCurrent(target)
    }

    const { title, body } = slides[current]

    return (
        <div className="carousel">
            <div className="carousel__track">
                {slides.map((slide, i) => {
                    const slot = getSlot(i, current, n)
                    return (
                        <div
                            key={i}
                            className={`carousel__item carousel__item--${slot}`}
                            onClick={
                                slot === 'left'  ? () => navigate(((current - 1) + n) % n) :
                                slot === 'right' ? () => navigate((current + 1) % n) :
                                undefined
                            }
                        >
                            <img src={slide.image} alt="" />
                        </div>
                    )
                })}

                <button className="carousel__arrow carousel__arrow--left"  onClick={() => navigate(((current - 1) + n) % n)} aria-label="Previous" />
                <button className="carousel__arrow carousel__arrow--right" onClick={() => navigate((current + 1) % n)} aria-label="Next" />
            </div>

            <div className="carousel__diamonds">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`carousel__diamond${i === current ? ' carousel__diamond--active' : ''}`}
                        onClick={() => navigate(i)}
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
