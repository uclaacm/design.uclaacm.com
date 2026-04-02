import Carousel from './Carousel.tsx'
import '../../styles/Card.css'

interface CardProps {
    images: string[]
    text?: string
}

function Card({ images, text }: CardProps) {
    return (
        <div id="Card">
            <Carousel images={images} />
            <p style={{ fontFamily: "'Inter', sans-serif" }}>{text}</p>
        </div>
    )
}
export default Card
