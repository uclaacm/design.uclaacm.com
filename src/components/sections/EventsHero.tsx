import ImagePlaceholder from "../common/ImagePlaceholder"
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
                        This page shows events that are open to all. To find out about events for
                        internal members, please check them out here.
                    </p>
                </div>

                {/*Illustration*/}
                <div className="events-hero-illustration">
                    <ImagePlaceholder width="548px" height="413px" />
                </div>

            </div>
            </div>
        </div>
    )
}

export default EventsHero
