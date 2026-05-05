import { useState } from "react"
import EventCard from "../common/EventCard"
import EventModal from "../common/EventModal"
import { events, isCurrent } from "../../data/events"
import type { Event } from "../../data/events"
import "../../styles/EventsCurrent.css"

const currentEvents = events.filter(isCurrent)

function EventsCurrent() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    return (
        <section className="events-current-container">
            <div className="events-current-inner">
                <h2 className="events-current-heading">Current and Upcoming</h2>
                {currentEvents.length === 0 ? (
                    <div className="events-current-empty">
                        <p>No current or upcoming events — check back soon!</p>
                    </div>
                ) : (
                    <div className="events-current-list">
                        {currentEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                title={event.title}
                                description={event.shortDescription}
                                src={event.src}
                                onClick={() => setSelectedEvent(event)}
                            />
                        ))}
                    </div>
                )}
            </div>
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </section>
    )
}

export default EventsCurrent
