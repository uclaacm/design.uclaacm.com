import EventCard from "../common/EventCard"
import "../../styles/EventsCurrent.css"

const PLACEHOLDER_DESCRIPTION =
    "Description of our cool events. Description of our cool events. Description of our cool events. Description of our cool events. Description of our cool events."

const currentEvents = [
    { title: "General Member Projects", description: PLACEHOLDER_DESCRIPTION },
    { title: "AI x Design Speaker Event", description: PLACEHOLDER_DESCRIPTION },
    { title: "Design-a-thon", description: PLACEHOLDER_DESCRIPTION },
]

function EventsCurrent() {
    return (
        <section className="events-current-container">
            <h2 className="events-current-heading">Current and Upcoming</h2>
            <div className="events-current-list">
                {currentEvents.map((event) => (
                    <EventCard
                        key={event.title}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default EventsCurrent
