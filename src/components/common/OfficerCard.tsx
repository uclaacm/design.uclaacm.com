import '../../styles/OfficerCard.css'

interface OfficerProps {
    src: string
    name: string
    role: string
}

function OfficerCard(props: OfficerProps) {
    return(
        <div className="officer-card">
            <div className="officer-image">
                <img src={props.src}/>
            </div>
            <p className="officer-name">{props.name}</p>
            <p className="officer-role">{props.role}</p>
        </div>
    )
}

export default OfficerCard