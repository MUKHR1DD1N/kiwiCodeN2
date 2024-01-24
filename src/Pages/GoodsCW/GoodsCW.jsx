import React from 'react'
import "./GoodsCW.css"
import Text from '../../Attachments/Text/Text'
import TextTwo from '../../Attachments/TextTwo/TextTwo'
import AdditionalCard from '../../Attachments/AdditionalCard/AdditionalCard'


const GoodsCW = ({ children }) => {
    return (
        <div className="card__wraper ">
            <Text />
            {children}
            <TextTwo />
            <AdditionalCard/>
        </div>
    )
}

export default GoodsCW