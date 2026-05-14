import "../../styles/ClientsPastProjects.css"

interface ClientProject {
    id: string
    title: string
    client: string
    description: string
    src?: string
}

const pastProjects: ClientProject[] = [
    {
        id: "project-1",
        title: "Website Redesign and Development",
        client: "USAC Academic Affairs Commission (AAC)",
        description:
            "A complete redesign and development of the USAC AAC website, including a new layout, color scheme, and overall user experience.",
        src: "/images/blank.png",
    },
    {
        id: "project-2",
        title: "UX Audit & Redesign",
        client: "Workup",
        description:
            "A comprehensive UX audit and redesign of the Workup platform, improving user experience and engagement.",
        src: "/images/blank.png",
    },
]

function ClientsPastProjects() {
    return (
        <section className="clients-past-container">
            <div className="clients-past-inner">
                <h2 className="clients-past-heading">Past Projects</h2>
                <div className="clients-past-list">
                    {pastProjects.map((project) => (
                        <article key={project.id} className="client-project-card">
                            <div className="client-project-image">
                                {project.src && <img src={project.src} alt="" />}
                            </div>
                            <div className="client-project-text">
                                <h3 className="client-project-title">{project.title}</h3>
                                <p className="client-project-client">{project.client}</p>
                                <p className="client-project-description">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientsPastProjects
