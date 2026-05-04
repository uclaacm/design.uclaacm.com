import { useEffect } from "react"
import type { Event } from "../../data/events"
import "../../styles/EventModal.css"

interface EventModalProps {
    event: Event | null
    onClose: () => void
}

const TYPE_LABELS: Record<string, string> = {
    workshop: "Workshop",
    panel: "Panel",
    track: "Track",
}

function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    })
}

function EventModal({ event, onClose }: EventModalProps) {
    useEffect(() => {
        if (!event) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleKey)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", handleKey)
            document.body.style.overflow = ""
        }
    }, [event, onClose])

    if (!event) return null

    return (
        <div className="event-modal-backdrop" onClick={onClose}>
            <div
                className="event-modal"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="event-modal-title"
            >
                <button
                    className="event-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>

                {event.src && (
                    <div className="event-modal-image">
                        <img src={event.src} alt={event.title} />
                    </div>
                )}

                <div className="event-modal-body">
                    <div className="event-modal-pills">
                        <span className="event-modal-pill event-modal-pill--quarter">
                            {event.quarter} {event.year}
                        </span>
                        <span className="event-modal-pill event-modal-pill--type">
                            {TYPE_LABELS[event.type] ?? event.type}
                        </span>
                    </div>

                    <h2 className="event-modal-title" id="event-modal-title">
                        {event.title}
                    </h2>

                    <div className="event-modal-meta">
                        <div className="event-modal-meta-item">
                            <svg className="event-modal-meta-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="event-modal-meta-item">
                            <svg className="event-modal-meta-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M10 6v4.5l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{event.time}</span>
                        </div>
                        <div className="event-modal-meta-item">
                            <svg className="event-modal-meta-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                <circle cx="10" cy="7" r="1.75" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <div className="event-modal-divider" />

                    <div className="event-modal-description">
                        {event.fullDescription.split("\n").map((line, i) =>
                            line.trim() === "" ? (
                                <div key={i} className="event-modal-spacer" />
                            ) : (
                                <p key={i}>{line}</p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal
