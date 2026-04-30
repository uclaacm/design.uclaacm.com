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
                <OfficerCard src="" name="Abby Cromwell" role="Officer" />
                <OfficerCard src="" name="Ellie Huang" role="Officer" />
                <OfficerCard src="" name="Gokul Nambiar" role="Officer" />
                <OfficerCard src="" name="Hillary Nguyen" role="Officer" />
                <OfficerCard src="/src/assets/images/about/headshots/Jeslyn-Do.jpg" name="Jeslyn Do" role="Officer" />
                <OfficerCard src="" name="Kaitlyn Wu" role="Officer" />
                <OfficerCard src="" name="Katrina Yang" role="Officer" />
                <OfficerCard src="/src/assets/images/about/headshots/Kay-Kim.jpg" name="Kay Kim" role="Officer" />
                <OfficerCard src="" name="Nancy Her" role="Officer" />
                <OfficerCard src="" name="Patrick Deng" role="Officer" />
            </div>
        </div>
    )
}

export default MeetOurOfficers