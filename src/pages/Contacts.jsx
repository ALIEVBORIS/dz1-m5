// import React from 'react'
import { useNavigate } from 'react-router-dom';


const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className="header">
      <div className="nav">
        <span onClick={() => navigate('/')}>Главная</span>
        <span onClick={() => navigate('/contacts')}>Контакты</span>
        <span onClick={() => navigate('/cart')}>Корзина</span>
        {/* <span onClick={() => navigate('/singup')}>SingUp</span> */}
      </div>
    </div>
    </div>
  )
}

export default Contacts