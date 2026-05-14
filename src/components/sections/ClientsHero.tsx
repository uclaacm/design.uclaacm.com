import "../../styles/ClientsHero.css"

function ClientsHero() {
    return (
        <div className="clients-hero-container">
            <div className="clients-hero-inner">
                <div className="clients-hero-top">
                    <div className="clients-hero-illustration">
                        <img
                            src="/images/Client-Project.svg"
                            alt="Client project illustration"
                        />
                    </div>

                    <div className="clients-hero-text">
                        <h1 className="clients-hero-title">
                            <span className="clients-hero-black-gradient">Work with Us</span>
                        </h1>
                        <p className="clients-hero-body">
                            ACM Design partners with student organizations, campus
                            departments, and local nonprofits to deliver thoughtful,
                            human-centered design work — from branding and illustrations
                            to full product experiences. Tell us about your project and
                            our team will be in touch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsHero
