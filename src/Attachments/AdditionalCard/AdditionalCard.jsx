import React from 'react'
import "./AdditionalCard.css"
import imgt1 from "../../Asses/Img/t1.jpg"
import imgt2 from "../../Asses/Img/t2.jpg"
import imgt3 from "../../Asses/Img/t3.jpg"
import imgt4 from "../../Asses/Img/t4.jpg"

const AdditionalCard = () => {
    return (
        <div className='AdditionalCard'>

            <div className="cardTwo">
                <div className="imgcard">
                    <img src={imgt1} alt="" />
                </div>
                <h3>White Clothes</h3>
                <p>10$</p>
            </div>

            <div className="cardTwo">
                <div className="imgcard">
                    <img src={imgt2} alt="" />
                </div>
                <h3>A set of winter clothes</h3>
                <p>14$</p>
            </div>

            <div className="cardTwo">
                <div className="imgcard">
                    <img src={imgt3} alt="" />
                </div>
                <h3>Long sided dresses</h3>
                <p>8$</p>
            </div>

            <div className="cardTwo">
                <div className="imgcard">
                    <img src={imgt4} alt="" />
                </div>
                <h3>Bags</h3>
                <p>4$</p>
            </div>
        </div>
    )
}

export default AdditionalCard