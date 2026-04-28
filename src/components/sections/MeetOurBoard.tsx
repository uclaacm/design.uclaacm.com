import OfficerCard from '../common/OfficerCard'
import '../../styles/MeetOurBoard.css'
import '../../styles/global.css'

function MeetOurBoard() {
    return (
        <div className="board-container">
            <h1 className="board-title">
                <span className="board-black-gradient">Meet Our </span>
                <span className="board-orange-gradient">Board</span>
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

export default MeetOurBoard
