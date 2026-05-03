import { useState } from "react"
import EventCard from "../common/EventCard"
import "../../styles/EventsPast.css"

interface PastEvent {
    year: string
    title: string
    description: string
    src: string
}

const pastEvents: PastEvent[] = [
    {
        year: "2025-2026",
        title: "Digital Cardmarking Workshop",
        description:
            "Interested in learning HTML and CSS to make cool animated cards? In this workshop, learn to navigate VS Code and create your own customized digital cards. All skill levels welcome! 🗓 Wednesday, April 15 · 7–8PM · Engineering VI, Room 289",
        src: "/images/Events/S2026-W3Workshop.png",
    },
    {
        year: "2025-2026",
        title: "Intro to Photoshop Workshop",
        description:
            "Come join us for an intro to design with Photoshop! Learn to navigate Photoshop and use its features to create your own designs—a perfect entry point for beginners. Plus, join us for a ShareTea boba run social at 8PM right after! 🗓 Thursday, April 9 · 6–8PM · Boelter 8500",
        src: "/images/Events/S2026-W2Workshop.png",
    },
    {
        year: "2025-2026",
        title: "Build a Standout Design Portfolio",
        description:
            "Want a strong portfolio that stands out? Learn how to best present yourself and your skills through a professionally developed design portfolio. Explore personal branding and shape your unique style. Open to all skill levels! 🗓 Thursday, April 2 · 6–8PM · Boelter 8500",
        src: "/images/Events/S2026-W1Workshop.png",
    },
    {
        year: "2025-2026",
        title: "AI + Design Panel",
        description:
            "Come hear from guest speakers on AI tools for frontend development, human-centered AI and XR, and human-computer interaction. Includes a hands-on segment, a Claude Pro demo, and free snacks! 🗓 Thursday, January 29 · 4–6PM · Engineering VI, Room 289",
        src: "/images/Events/W2026-AIxDesign.png",
    },
    {
        year: "2025-2026",
        title: "Projects Track",
        description:
            "A 10-week, beginner-friendly series where you work on a full, PM-led product from ideation to prototype. Collaborate in small teams, gain guided experience in Figma, and walk away with a portfolio-ready project—all in a supportive, low-commitment environment. 🗓 Starts January 7 · 6–8PM · MS 5200",
        src: "/images/Events/W2026-ProjectsTrack.png",
    },
    {
        year: "2025-2026",
        title: "Design Workshop Track",
        description:
            "Learn UX/UI design and refresh your Figma skills! Pick up a new skill every Tuesday—from creating wireframes and prototypes in Figma to building a website in Framer. No prior experience necessary. 🗓 Tuesdays · 7–8PM · Engineering VI 289 · Starts October 14",
        src: "/images/Events/F2025-DesignTrack.jpg",
    },
    {
        year: "2025-2026",
        title: "Dev Workshop Track",
        description:
            "Learn the fundamentals of front-end development—from HTML and CSS to JavaScript and React. By the end of the series, you'll have a fully coded portfolio as your finished product. No previous coding experience needed! 🗓 Wednesdays · 6–7PM · Boelter 5273 · Starts October 15",
        src: "/images/Events/F2025-DevTrack.jpg",
    },
]

function EventsPast() {
    const [selectedYear, setSelectedYear] = useState("2025-2026")

    const filteredEvents = pastEvents.filter((e) => e.year === selectedYear)

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
                        <option value="2025-2026">2025-2026</option>
                        <option value="2024-2025">2024-2025</option>
                        <option value="2023-2024">2023-2024</option>
                    </select>
                </div>
                <div className="events-past-list">
                    {filteredEvents.map((event) => (
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

export default EventsPast
