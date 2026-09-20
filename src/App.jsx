import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/skills'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App