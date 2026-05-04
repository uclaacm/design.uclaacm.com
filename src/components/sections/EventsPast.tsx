import { useState } from "react"
import EventCard from "../common/EventCard"
import EventModal from "../common/EventModal"
import { events, isPast } from "../../data/events"
import type { Event } from "../../data/events"
import "../../styles/EventsPast.css"

const pastEvents = events.filter(isPast)

const academicYears = [...new Set(pastEvents.map((e) => e.academicYear))].sort(
    (a, b) => b.localeCompare(a)
)

function EventsPast() {
    const [selectedYear, setSelectedYear] = useState(academicYears[0] ?? "")
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    const filteredEvents = pastEvents.filter((e) => e.academicYear === selectedYear)

    return (
        <section className="events-past-container">
            <div className="events-past-inner">
                <h2 className="events-past-heading">Past</h2>
                <div className="events-past-filter">
                    <span className="events-past-filter-label">See events in</span>
                    <select
                        className="events-past-dropdown"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        {academicYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="events-past-list">
                    {filteredEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            description={event.shortDescription}
                            src={event.src}
                            onClick={() => setSelectedEvent(event)}
                        />
                    ))}
                </div>
            </div>
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </section>
    )
}

export default EventsPast
