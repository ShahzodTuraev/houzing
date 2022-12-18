import React from 'react'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Properties from '../components/Properties'

const Root = () => {
  return <BrowserRouter>
  <Routes>
    <Route path ='/home' element={<Home />}/>
    <Route path ='/properties' element={<Properties />}/>
    <Route path ='*' element={<h1>404 NOT FOUNDED</h1>}/>
    <Route path ='/' element={<Navigate to={'/home'} />}/>
  </Routes>
  </BrowserRouter>
  
}

export default Root
