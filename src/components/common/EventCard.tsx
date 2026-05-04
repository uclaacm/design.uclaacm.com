import "../../styles/EventCard.css"

interface EventCardProps {
    src?: string
    title: string
    description: string
    onClick?: () => void
}

function EventCard({ src, title, description, onClick }: EventCardProps) {
    return (
        <button className="event-card" onClick={onClick} type="button">
            <div className="event-card-image">
                {src && <img src={src} alt="" />}
            </div>
            <div className="event-card-text">
                <h3 className="event-card-title">{title}</h3>
                <p className="event-card-description">{description}</p>
            </div>
        </button>
    )
}

export default EventCard
