import { About } from './components/About'
import { Contact } from './components/Contact'
import { Dishes } from './components/Dishes'
import { HeroSect } from './components/HeroSect'

const App = () => {
  return (
    <div>
      <HeroSect />
      <Dishes />
      <About />
      <Contact />
    </div>
  )
}

export default App