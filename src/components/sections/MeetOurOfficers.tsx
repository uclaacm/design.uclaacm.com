import OfficerCard from '../common/OfficerCard'
import '../../styles/MeetOurOfficers.css'
import '../../styles/global.css'

function MeetOurOfficers() {
    return (
        <div className="officers-container">
            <h1 className="officers-title">
                <span className="officers-black-gradient">Meet Our </span>
                <span className="officers-orange-gradient">Officers</span>
            </h1>
            <div className="officer-grid">
                <OfficerCard src="" name="Full Name" role="Role" />
                <OfficerCard src="" name="Full Name" role="Role" />
                <OfficerCard src="" name="Full Name" role="Role" />
                <OfficerCard src="" name="Full Name" role="Role" />
                <OfficerCard src="" name="Full Name" role="Role" />
                <OfficerCard src="" name="Full Name" role="Role" />
            </div>
        </div>
    )
}

export default MeetOurOfficers