import React, { useContext, useRef } from 'react'
import "./Login.css"
import img from "../../Asses/Img/n1.png"
import { AuthContext } from '../../Contex/AuthContext'

const Login = () => {
    const { setToken, token } = useContext(AuthContext)
    let nemeRef = useRef(null)
    let passwordRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = { 
            userName: nemeRef.current.value,
            userPassword: passwordRef.current.value
        }
        if (data.userName == "eve.holt@reqres.in" && data.userPassword == "cityslicka") {
            setToken(data) 
        } 
    }
    return (
    <div className="box">
    <h2>Bu Login pagemizni APIsi <a href="https://reqres.in/">reqers.in</a> saytidan olingan</h2>
    <div class="row" >
    <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
    <div class="card-body" >
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Email <code>eve.holt@reqres.in</code></label>
    <input class="form-control" ref={nemeRef} type="text" id="username" placeholder='Emailni kiriting' /><br /><br />
    <label htmlFor="pasvord">Parol <code>cityslicka</code></label>
    <input class="form-control" ref={passwordRef} type="text" id="pasvord" placeholder='Parolni kiriting' /><br /><br />
    <button>Log In</button>
    </form>
    </div>
    </div>
    </div>
    <div class="col-sm-6">
    <div class="card">
    <div class="card-body">
    <div className='img'>
    <img src={img} alt="" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Login