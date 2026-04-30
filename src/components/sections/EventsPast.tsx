import EventCard from "../common/EventCard"
import "../../styles/EventsPast.css"

const PLACEHOLDER_DESCRIPTION =
    "Description of our cool events. Description of our cool events. Description of our cool events. Description of our cool events. Description of our cool events."

const pastEvents = [
    { title: "Beginner Design Workshops", description: PLACEHOLDER_DESCRIPTION },
    { title: "Beginner Dev Workshops", description: PLACEHOLDER_DESCRIPTION },
    { title: "Recruitment & Intern Apps", description: PLACEHOLDER_DESCRIPTION },
]

function EventsPast() {
    return (
        <section className="events-past-container">
            <h2 className="events-past-heading">Past</h2>
            <div className="events-past-filter">
                <span className="events-past-filter-label">See events in</span>
                <select className="events-past-dropdown" defaultValue="2025-2026">
                    <option value="2025-2026">2025-2026</option>
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                </select>
            </div>
            <div className="events-past-list">
                {pastEvents.map((event) => (
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

export default EventsPast
