import { Link } from "react-router-dom"

export default function CompareItem({ chosenItem }) {
    return (
        <div style={{display: "grid"}}> 
            <img className="table-img" src={chosenItem[0].image} alt="No-Warnings"/>
            <div className="compare-price">NTD{chosenItem[0].price}</div>
            <Link className="compare-btn" to={`/detail/${chosenItem[0].link}`}>點我購買</Link>
            <img className="feature-img" src={chosenItem[0].compareImg1} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg2} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg3} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg4} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg5} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg6} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg7} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg8} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg9} alt="No-Warnings"/>
            <img className="feature-img" src={chosenItem[0].compareImg10} alt="No-Warnings" />
            <img className="feature-img" src={chosenItem[0].compareImg11} alt="No-Warnings" />
            <img className="feature-img" src={chosenItem[0].compareImg12} alt="No-Warnings" />
            <img className="feature-img" src={chosenItem[0].compareImg13} alt="No-Warnings" />
            <img className="feature-img" src={chosenItem[0].compareImg14} alt="No-Warnings" />
        </div>
    )
}