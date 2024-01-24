import { useEffect, useState } from 'react';
import './App.css';
import Header from './Companents/Header/Header';
import Hard from './Pages/Hard/Hard';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Contex/AuthContext';
import Login from './Pages/Login/Login';
import GoodsCW from './Pages/GoodsCW/GoodsCW';
import GoodsC from './Pages/GoodsC/GoodsC';
import GoodsCN2 from './Companents/GoodeCN2/GoodsCN2';
import "./Companents/i18n/i18n"



function App() {
  const { token } = useContext(AuthContext)
  const [users,  setUsers] = useState([])


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(free => setUsers(free))
  }, [])

  return (
    <div className='app'>

      {
        token ? (
          <>
            <Header  />



            <Routes>

              {/* N1 Tavarlar */}
              <Route path='/' element={<GoodsCW> 
               

                {
                  users.map(item => (
                    <GoodsC img={item.image} title={item.title} info={item.price} />
                  ))
                }
                <GoodsCN2 />
              </GoodsCW>} />



              <Route path='/Hard' element={< Hard />} />

              <Route path='*' element={<h1 align="center">Erorr</h1>} />
            </Routes></>
        ) : (
          <Login />
        )
      }


    </div>

  );
}



export default App;
