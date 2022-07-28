import React, { Fragment, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Signup from './pages/Signup/Signup'
import { UserContext } from './components/contexts/userContext'
import checkLogin from './api/auth/checkLogin'


function App() {
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUserAsync = async(token)=>{
      let userData = await checkLogin(token)
      if(userData.status == "OK"){
          setUser(userData.user)
      }

      setIsLoading(false)
    }
    let token = localStorage.getItem("userToken")
    if(token){
      getUserAsync(token)
      
    } else{
      setIsLoading(false)
    }

    
    console.log("TESTE");

  }, user)

  if (isLoading)
    return <h1>Loading</h1>

  return (
    <div className="App mt-0 p-0">
      <Routes>

        <Route path='/' element={<Header />}>
          <Route index element={<h1>TESTE</h1>} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/signup' element={<Signup />} />
        </Route>

        <Route path='/dashboard' element={<Fragment><Outlet /></Fragment>}>
          <Route index element={<h1>Dashboard home</h1>} />
          <Route path='links' element={<h1>Links</h1>} />
        </Route>

        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </div >
  )
}

export default App
