import React, { Fragment, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Signup from './pages/Signup/Signup'
import { UserContext } from './components/contexts/userContext'
import checkLogin from './api/auth/checkLogin'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardNavigation from './components/DashboardNavigation/DashboardNavigation'
import UserLinks from './pages/UserLinks/UserLinks'
import NewLink from './pages/NewLink/NewLink'
import EditLink from './pages/EditLink/EditLink'


function App() {
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    const getUserAsync = async (token) => {
      let userData = await checkLogin(token)
      if (userData.status == "OK") {
        setUser(userData.user)
      }
      setIsLoading(false)
    }
    let token = localStorage.getItem("userToken")
    if (token) {
      getUserAsync(token)

    } else {
      setIsLoading(false)
    }


    console.log("TESTE");

  }, user)

  if (isLoading)
    return <h1>Loading</h1>

  if (location.pathname.split("/").length >= 2 && location.pathname.split("/")[1].toLowerCase() != "dashboard")


    return (
      <div className="App mt-0 p-0">

        <Routes>

          <Route path='/' element={<Header />}>
            <Route index element={<h1>TESTE</h1>} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/signup' element={<Signup />} />
          </Route>

          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </div >
    )
  else
    return (
      <div className='h-screen bg-slate-700 flex'>
        <Routes>
          <Route path='/dashboard' element={<DashboardNavigation />}>
            <Route index element={<Dashboard />} />
            <Route path='links' element={<UserLinks/>} />
            <Route path='new-link' element={<NewLink/>} />
            <Route path='edit-link/:code' element={<EditLink/>}/>
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />

        </Routes>
      </div>
    )
}

export default App
