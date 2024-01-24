import React, { useContext } from 'react'
import "./Header.css"
import img2 from "../../Asses/Img/n2.png"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contex/AuthContext'
import "../i18n/i18n"
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { setToken } = useContext(AuthContext)
    let navigate = useNavigate()
    const { t, i18n } = useTranslation()
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    function exitHome() {
        setToken(null)
        navigate("/")
        localStorage.removeItem("token,")
    }
    return (
        <header className='shadow-lg p-2 mb-3 bg-body-tertiary rounded '>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid bgraund">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <a class="navbar-brand text text1" href="#">
                        Продай, найди, купи <br /> все что пожелаешь…
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/"> {t("Home")} </Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Hard"> {t("Place an order")} </Link >
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"> {t("Additional information")}</a>
                            </li>
                        </ul>
                        <form class="d-flex navbar-nav  mb-2 mb-lg-0" role="search">
                            <li class="nav-item tillar">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <select onChange={handleChange}>
                                        <option value="ru" >Рус</option>
                                        <option value="uz" >Uzb</option>
                                        <option value="en">Eng</option>
                                    </select></a>
                            </li>
                            <li class="nav-item"> 
                                <button type="button" class="btn btn-primary" onClick={exitHome}>Home</button>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header

