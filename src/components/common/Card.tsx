import Carousel from './Carousel.tsx'
import '../../styles/Card.css'

interface CardProps {
    images: string[]
    text?: string
}

function Card({ images, text }: CardProps) {
    const slides = images.map(image => ({ image }))
    return (
        <div id="Card">
            <Carousel slides={slides} />
            <p style={{ fontFamily: "'Inter', sans-serif" }}>{text}</p>
        </div>
    )
}
export default Card
