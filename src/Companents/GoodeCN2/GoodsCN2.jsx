import React from 'react'
import img7 from "../../Asses/Img/n7.png"
import img5 from "../../Asses/Img/n5.png"
import img4 from "../../Asses/Img/n4.png"
import "./GoodsCN2.css"


const GoodsCN2 = () => {
    return (
        <div class="card-group box_stayle">
            <ul>
                <img class="card-img-top" src={img7} alt="Card image cap" />
            </ul>

            <ul>
                <img class="card-img-top" src={img4} alt="Card image cap" />
            </ul>

            <ul>
                <img class="card-img-top" src={img5} alt="Card image cap" />
            </ul>
        </div>
    )
}

export default GoodsCN2