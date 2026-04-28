import "../../styles/Alumni.css"
import {useState} from 'react'

function Alumni() {

    const [activeTab, setActiveTab] = useState('2025-26')
    
    return(
        <div className="alumni-container">
             <h1 className="alumni-title"><span className="alumni-gradient">Alumni</span></h1>
             
             <div className="alumni-tabs">
                <span className={`alumni-tab ${activeTab === '2025-26' ? 'active' : ''}`} onClick={() => setActiveTab('2025-26')}><span>2025-26</span></span>
                <span className={`alumni-tab ${activeTab === '2024-25' ? 'active' : ''}`} onClick={() => setActiveTab('2024-25')}><span>2024-25</span></span>
                <span className={`alumni-tab ${activeTab === '2023-24' ? 'active' : ''}`} onClick={() => setActiveTab('2023-24')}><span>2023-24</span></span>
             </div>
             
             <div className="alumni-card">
                {activeTab === '2025-26' && (
                    <div className="alumni-columns">
                        <div className="alumni-column">
                            <p className="alumni-role">Co-Presidents</p>
                            <p className="alumni-name">Bethany Kim, Coco Li</p>
                            <p className="alumni-role">Design Directors</p>
                            <p className="alumni-name">Ellie Huang, Angelina Wu</p>
                            <p className="alumni-role">Dev Directors</p>
                            <p className="alumni-name">Jane Oh, Gokul Nambiar</p>
                        </div>
                        <div className="alumni-column">
                            <p className="alumni-role">Marketing Director</p>
                            <p className="alumni-name">Isabelle Chang</p>
                            <p className="alumni-role">Workshops Director</p>
                            <p className="alumni-name">Sonia Teo</p>
                            <p className="alumni-role">Officers</p>
                            <p className="alumni-name">Kaitlyn Wu, Hillary Nguyen, Nancy Her</p>
                        </div>
                    </div>
                )}
                
                {activeTab === '2024-25' && (
                    <div className="alumni-columns"></div>
                )}
                
                {activeTab === '2023-24' && (
                    <div className="alumni-columns"></div>
                )}
            </div>
        </div>
    )
}

export default Alumni