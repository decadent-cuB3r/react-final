import { Link } from "react-router-dom"

export default function CompareItem({ chosenItem }) {
    return (
        <div style={{display: "grid"}}> 
            <img className="table-img" src={chosenItem[0].image} />
            <div className="compare-price">NTD{chosenItem[0].price}</div>
            <Link className="compare-btn" to={`/detail/${chosenItem[0].link}`}>點我購買</Link>
            <img className="feature-img" src={chosenItem[0].compareImg1} />
            <img className="feature-img" src={chosenItem[0].compareImg2} />
            <img className="feature-img" src={chosenItem[0].compareImg3} />
            <img className="feature-img" src={chosenItem[0].compareImg4} />
            <img className="feature-img" src={chosenItem[0].compareImg5} />
            <img className="feature-img" src={chosenItem[0].compareImg6} />
            <img className="feature-img" src={chosenItem[0].compareImg7} />
            <img className="feature-img" src={chosenItem[0].compareImg8} />
            <img className="feature-img" src={chosenItem[0].compareImg9} />
            <img className="feature-img" src={chosenItem[0].compareImg10} />
            <img className="feature-img" src={chosenItem[0].compareImg11} />
            <img className="feature-img" src={chosenItem[0].compareImg12} />
            <img className="feature-img" src={chosenItem[0].compareImg13} />
            <img className="feature-img" src={chosenItem[0].compareImg14} />
        </div>
    )
}