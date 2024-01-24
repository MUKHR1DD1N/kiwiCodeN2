import React, { useEffect, useRef, useState } from 'react'
import "./Hard.css"
import { useTranslation } from 'react-i18next'


export const Hard = () => {
  const { t, i18n } = useTranslation()

  let [name, setName] = useState("")
  let [namber, setNamber] = useState("")
  let [email, setEmail] = useState("")



  const sentMessage = (e) => {
    e.preventDefault()
    let chat = {
      token: "6702115001:AAE_v1go1A_LK_yNy-ctCSL9t1CA87sJfp4",
      chatId: "-1002052236122",
      content: `Raqam: ${namber}, Email: ${email},  Ism: ${name},  `,
    }

    fetch(`https://api.telegram.org/bot${chat.token}/sendMessage?chat_id=${chat.chatId}&text=${chat.content}`)
      .then(success => console.log(success))

  }
  return (
    <div className="tontent">
      <div>
        <form class="input form-control">
          <select>
            <option>Samarqand</option>
            <option>Toshkent</option>
            <option>Jizzax</option>
            <option>Namangon</option>
            <option>Bangladesh</option>
          </select>
          <select>
            <option >Samarqand shahar</option>
            <option >Nuroboq</option>
            <option>Qora qamich</option>
            <option>Qora soy</option>
          </select>
        </form>
        <div className="karta">
          <iframe width="860" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=400&amp;hl=en&amp;q=%20Samarqand%20Buyuk%20Avlod+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/ru'></a>
        </div ><br /><br />
        <div className='father_form'>
          <form className='massage' onSubmit={sentMessage}>
            <label>Enter your name</label><br />
            <input type='text' onChange={e => setName(e.target.value)} placeholder='Mukhriddin...' /><br />

            <label> Emailni kiriting</label><br />
            <input type="text" onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' /><br />

            <label>Telefon raqamingiz</label><br />
            <input type="number" onChange={e => setNamber(e.target.value)} placeholder='+998 12 345 67 89' /><br />

            <button type='submit' className='sentMassage'>Send</button>
          </form>
        </div>
      </div>
    </div>





  )
}

export default Hard