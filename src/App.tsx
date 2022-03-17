import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

import { FetchContext } from './contexts/FetchContext'

function App() {
  const [keyword, setKeyword] = useState("colorful")

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
