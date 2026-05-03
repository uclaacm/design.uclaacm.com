import EventCard from "../common/EventCard"
import "../../styles/EventsCurrent.css"

const currentEvents = [
    {
        title: "Intro to p5.js Workshop",
        description:
            "Are you a creative who wants to turn code into design? Come to our p5.js workshop and learn to create stunning visuals. In this beginner-friendly workshop you will learn how to navigate and use p5.js—a great tool for bringing your designs to life and adding interactivity! 🗓 Wednesday, April 22 · 7–8PM · Engineering VI, Room 289",
        src: "/images/Events/S2026-W4Workshop.png",
    },
]

function EventsCurrent() {
    return (
        <section className="events-current-container">
            <div className="events-current-inner">
                <h2 className="events-current-heading">Current and Upcoming</h2>
                <div className="events-current-list">
                    {currentEvents.map((event) => (
                        <EventCard
                            key={event.title}
                            title={event.title}
                            description={event.description}
                            src={event.src}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventsCurrent
