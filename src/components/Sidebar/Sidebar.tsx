import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faThumbsUp, faFlag, faQuestion, faComment, 
         faArrowTrendUp, faPhotoFilm, faBagShopping, faClapperboard, 
         faBroadcastTower, faGamepad, faNewspaper, faTrophy, 
         faGraduationCap, faShirt, faPodcast, faHistory, faSliders, 
         faClock, faMusic, faHome, faCompass, faSubscript, faUser } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';

function Sidebar() {
    const year = new Date().getFullYear();
    return (
        <div className="sidebar">
            {/* Main Section */}
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faHome} /></div>
                <div className="sidebar-text">Home</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faCompass} /></div>
                <div className="sidebar-text">Shorts</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faSubscript} /></div>
                <div className="sidebar-text">Subscriptions</div>
            </div>
            
            <div className="sidebar-divider"></div>
            
            {/* You Section */}
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faUser} /></div>
                <div className="sidebar-text">You</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faHistory} /></div>
                <div className="sidebar-text">History</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faSliders} /></div>
                <div className="sidebar-text">Playlists</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faPhotoFilm} /></div>
                <div className="sidebar-text">Your Videos</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faClock} /></div>
                <div className="sidebar-text">Watch Later</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faThumbsUp} /></div>
                <div className="sidebar-text">Liked Videos</div>
            </div>
            
            <div className="sidebar-divider"></div>
            
            {/* Explore Section */}
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faArrowTrendUp} /></div>
                <div className="sidebar-text">Trending</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faBagShopping} /></div>
                <div className="sidebar-text">Shopping</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faMusic} /></div>
                <div className="sidebar-text">Music</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faClapperboard} /></div>
                <div className="sidebar-text">Films</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faBroadcastTower} /></div>
                <div className="sidebar-text">Live</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faGamepad} /></div>
                <div className="sidebar-text">Gaming</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faNewspaper} /></div>
                <div className="sidebar-text">News</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faTrophy} /></div>
                <div className="sidebar-text">Sports</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
                <div className="sidebar-text">Courses</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faShirt} /></div>
                <div className="sidebar-text">Fashion</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faPodcast} /></div>
                <div className="sidebar-text">Podcasts</div>
            </div>
            
            <div className="sidebar-divider"></div>
            
            {/* Settings Section */}
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faGear} /></div>
                <div className="sidebar-text">Settings</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faFlag} /></div>
                <div className="sidebar-text">Report</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faQuestion} /></div>
                <div className="sidebar-text">Help</div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-icon"><FontAwesomeIcon icon={faComment} /></div>
                <div className="sidebar-text">Feedback</div>
            </div>
            
            <div className="sidebar-divider"></div>
            
            {/* Footer - only visible on desktop */}
            <div className="sidebar-footer" style={{padding: "16px 24px", fontSize: "12px", color: "#606060"}}>
                <p>About Press Copyright Contact us Creators Advertise Developers</p>
                <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <p>© {year} Google LLC</p>
            </div>
        </div>
    )
}

export default Sidebar;