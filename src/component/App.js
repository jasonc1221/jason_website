import React from 'react'
import '../css/App.css'
import Banner from './Banner'
import MenuBar from './MenuBar'
import AboutMe from './AboutMe'
import Resume from './Resume'
import ContactInfo from './ContactInfo'


function App() {
  return (
    <div className="App">
      <Banner/>
      <MenuBar/>
      <AboutMe/>
      <Resume/>
      <ContactInfo />
    </div>
  )
}

export default App;
