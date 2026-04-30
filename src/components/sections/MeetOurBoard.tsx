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
                <OfficerCard src="/src/assets/images/about/headshots/Angelina-Wu.png" name="Angelina Wu" role="Co-President" />
                <OfficerCard src="" name="Isabelle Chang" role="Co-President" />
                <OfficerCard src="" name="Lexi Chua" role="Design Director" />
                <OfficerCard src="/src/assets/images/about/headshots/Matthew-Chen.png" name="Matthew Chen" role="Design Director" />
                <OfficerCard src="" name="Derek Hsu" role="Dev Director" />
                <OfficerCard src="/src/assets/images/about/headshots/Shogo-Toiyama.png" name="Shogo Toiyama" role="Dev Director" />
                <OfficerCard src="" name="Anthony Navarrez" role="Marketing Director" />
                <OfficerCard src="" name="Chelsea Lee" role="Workshops Director" />
                <OfficerCard src="" name="Jane Oh" role="Workshops Director" />
                <OfficerCard src="" name="Kiana Cheatham" role="Workshops Director" />
                <OfficerCard src="" name="Rica Kotani" role="Workshops Director" />
            </div>
        </div>
    )
}

export default MeetOurBoard
