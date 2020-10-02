import React from 'react'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
 

function App() {
    return (
        <div className="app">
         <Header />
         <div className="app__body">
              <SideBar />
         </div>
        </div>
    )
}

export default App