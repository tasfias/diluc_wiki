import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import './HomePage.css'

function HomePage() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    api.get('/characters/')
      .then(res => setCharacters(res.data))
  }, [])

  return (
    <div>
      <header className="home-header">
        <h1>Diluc Wiki</h1>
      </header>

      <main className="home-main">
        <h2>All Characters</h2>
        <div className="character-grid">
          {characters.map(character => (
            <Link
              key={character.id}
              to={`/characters/${character.slug}`}
              className="character-card"
            >
              <h3>{character.name}</h3>
              <p>{character.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage