import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Signup from './pages/Signup/Signup'


function App() {

  return (
    <div className="App mt-0 p-0">
      <Routes>
        
          <Route path='/' element={<Header/>}>
            <Route index element={<h1>TESTE</h1>} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/signup' element={<Signup/>}/>
          </Route>
          
          <Route path='/dashboard' element={<Fragment><Outlet/></Fragment>}>
            <Route index element={<h1>Dashboard home</h1>}/>
            <Route path='links' element={<h1>Links</h1>}/>
          </Route>
        
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </div >
  )
}

export default App
