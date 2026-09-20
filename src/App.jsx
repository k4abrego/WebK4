import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/skills'
import Projects from './components/projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App