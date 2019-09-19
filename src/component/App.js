import React from 'react'
import '../css/App.css'
import Banner from './Banner'
import ProfilePic from './ProfilePic'
import AboutMe from './AboutMe'
import ContactInfo from './ContactInfo'
import Hobbies from './Hobbies'


function App() {
  return (
    <div className="App">
      <Banner/>
      <ProfilePic/>
      <div className = 'Body'>
        <AboutMe />
        <Hobbies />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
