import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../layout/mainPage/index2'
import Table from '../layout/mainPage/tablePage'

const Routing = () => {
  return (
    <>

    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/table" element={<Table/>} />










        </Routes>
      </BrowserRouter>


    </div>
  </>

  )
}

export default Routing
