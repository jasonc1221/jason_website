import React from 'react'
import './css/App.css'
import Banner from './component/Banner'
import MenuBar from './component/MenuBar'
import AboutMe from './component/AboutMe'
import Resume from './component/Resume'
import ContactInfo from './component/ContactInfo'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Banner/>
        <MenuBar/>
        <AboutMe/>
        <Resume/>
        <ContactInfo />
      </div>
    </Provider>
  )
}

export default App
