import React from 'react'
import '../css/App.css'
import Banner from './Banner'
import ProfilePic from './ProfilePic'
import Content from './Content'
import ContactInfo from './ContactInfo'


function App() {
  return (
    <div className="App">
      <Banner/>
      <ProfilePic/>
      <Content/>
      <ContactInfo />
    </div>
  )
}

export default App;
