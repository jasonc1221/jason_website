import React from 'react'
import '../css/App.css'
import Banner from './Banner'
import MenuBar from './MenuBar'
import Content from './Content'
import ContactInfo from './ContactInfo'


function App() {
  return (
    <div className="App">
      <Banner/>
      <MenuBar/>
      <Content/>
      <ContactInfo />
    </div>
  )
}

export default App;
