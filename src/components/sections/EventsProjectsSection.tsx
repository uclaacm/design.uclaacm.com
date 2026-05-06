import { useEffect, useRef } from 'react'
import Carousel from '../common/Carousel'
import '../../styles/Carousel.css'

function EventsProjectsSection() {
    const headingRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const el = headingRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('events__scroll-in--visible')
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div style={{ padding: "60px 100px", background: "#ffffff" }}>
            <p
                ref={headingRef}
                className="events__scroll-in"
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                    textAlign: "center",
                    margin: "0 0 40px 0",
                    background: "linear-gradient(to bottom, #111111 0%, #555555 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >Events and Projects</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%" }}>
                    <Carousel slides={[
                        {
                            image: "/images/blank.png",
                            title: "AI x Design Event",
                            body: "In this Claude-sponsored event, we hosted guest speakers who spoke about AI tools for frontend development, human-centered AI and XR, and human-computer interaction.",
                        },
                        {
                            image: "/images/Picnic-Social.jpg",
                            title: "Social",
                            body: "picnic at jans steps finals week winter",
                        },
                        {
                            image: "/images/balloon.jpg",
                            title: "balloon flowers?",
                            body: "whats happening here?",
                        },
                    ]} />
                </div>
            </div>
        </div>
    )
}
export default EventsProjectsSection
