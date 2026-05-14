import "../../styles/EventsHero.css"

function EventsHero() {
    return (
        <div className="events-hero-container">
            <div className="events-hero-inner">
            <div className="events-hero-top">

                <div className="events-hero-text">
                    <h1 className="events-hero-title">
                        <span className="events-hero-black-gradient">Events</span>
                    </h1>
                    <p className="events-hero-body">
                        From hands-on workshops in Figma, Photoshop, and front-end development to
                        speaker panels and quarter-long project tracks, our events are open to all
                        UCLA students—no experience required! Come learn, design, and create with us.
                    </p>
                </div>

                {/*Illustration*/}
                <div className="events-hero-illustration">
                    <img src="/images/Fox-Events.svg" alt="Fox Events" width="548" height="413" />
                </div>

            </div>
            </div>
        </div>
    )
}

export default EventsHero
