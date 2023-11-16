import React from 'react'
import Intro from './components/Intro'
import Project from './components/Project'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Intro />
      <Project />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App