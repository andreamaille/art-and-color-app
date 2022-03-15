import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

import { FetchContext } from './contexts/FetchContext'

function App() {

  const [keyword, setKeyword] = useState("colorful")

  // setKeyword('hellllooo')
  // console.log(keyword, 'keys')
  return (
    <>
      <FetchContext.Provider value={{keyword, setKeyword}}>
        <Router>
          <Layout />
        </Router>
      </FetchContext.Provider>
    </>
  );
}

export default App;
