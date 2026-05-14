import { useState, type FormEvent } from "react"
import "../../styles/ClientsContact.css"

function ClientsContact() {
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section className="clients-contact-container">
            <div className="clients-contact-inner">
                <h2 className="clients-contact-heading">Contact Us</h2>

                <form className="clients-contact-form" onSubmit={handleSubmit}>
                    <div className="clients-contact-grid">
                        <div className="clients-contact-fields">
                            <div className="clients-contact-row">
                                <label className="clients-contact-field">
                                    <span className="clients-contact-label">First name</span>
                                    <input
                                        className="clients-contact-input"
                                        type="text"
                                        name="firstName"
                                        required
                                    />
                                </label>
                                <label className="clients-contact-field">
                                    <span className="clients-contact-label">Last name</span>
                                    <input
                                        className="clients-contact-input"
                                        type="text"
                                        name="lastName"
                                        required
                                    />
                                </label>
                            </div>
                            <label className="clients-contact-field">
                                <span className="clients-contact-label">Email</span>
                                <input
                                    className="clients-contact-input"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </label>
                            <label className="clients-contact-field">
                                <span className="clients-contact-label">Organization</span>
                                <input
                                    className="clients-contact-input"
                                    type="text"
                                    name="organization"
                                />
                            </label>
                            <label className="clients-contact-field">
                                <span className="clients-contact-label">Subject</span>
                                <input
                                    className="clients-contact-input"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </label>
                        </div>

                        <label className="clients-contact-field clients-contact-message">
                            <span className="clients-contact-label">Message</span>
                            <textarea
                                className="clients-contact-input clients-contact-textarea"
                                name="message"
                                required
                            />
                        </label>
                    </div>

                    <div className="clients-contact-actions">
                        <button
                            type="submit"
                            className="clients-contact-submit"
                            disabled={submitted}
                        >
                            {submitted ? "Sent — thanks!" : "Send message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ClientsContact
