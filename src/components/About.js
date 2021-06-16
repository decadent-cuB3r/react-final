import { Link } from 'react-router-dom';
import about from "../images/about.jpg"


export default function About() {
    return (
        <div className="layout-about">
            <div className="about-sider">
                <img className="about-img"src={about} alt="About" />
            </div>
            <div className="about-content">
                <div className="about-content-block">
                    <div className="about-content-title">關於
                    <div className="title-color">五吉</div>
                    </div>
                    <hr className="about-content-line"></hr>
                    <div className="about-content-text">
                         台灣五吉專精於博弈產業，店內有專業麻將、中骨牌、筒子、象棋、麻將紙…等等應有盡有。本公司多款高品質.超靜音四口機"電動麻將桌"，已實際價格進入大眾家中，讓大家擁有一台不會壞的麻將桌。各廠牌麻將桌皆可快速維修，當日報修，當天到修，讓您打牌不必再等。高品質、好服務成為本公司的正字招牌，帶領業界服務至上的理念，持續發揚中華文化。
                    </div>
                    <Link to="/" >
                        <div className="about-content-btn">
                        see more
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
