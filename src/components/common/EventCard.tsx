import "../../styles/EventCard.css"

interface EventCardProps {
    src?: string
    title: string
    description: string
}

function EventCard({ src, title, description }: EventCardProps) {
    return (
        <div className="event-card">
            <div className="event-card-image">
                {src && <img src={src} alt="" />}
            </div>
            <div className="event-card-text">
                <h3 className="event-card-title">{title}</h3>
                <p className="event-card-description">{description}</p>
            </div>
        </div>
    )
}

export default EventCard
