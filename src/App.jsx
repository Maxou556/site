import Nav from './components/Nav'
import Hero from './components/Hero'
import Esprit from './components/Esprit'
import Carte from './components/Carte'
import Ambiance from './components/Ambiance'
import Avis from './components/Avis'
import Infos from './components/Infos'
import useScrollStory from './hooks/useScrollStory'

export default function App() {
  useScrollStory()

  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Esprit />
        <Carte />
        <Ambiance />
        <Avis />
        <Infos />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            <strong>Les Filles au La</strong>
            <br />
            Guinguette culturelle · Mons · Rue du Hautbois 13
          </p>
        </div>
      </footer>
    </div>
  )
}
