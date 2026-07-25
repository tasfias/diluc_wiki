import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

function HomePage() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    api.get('/characters/')
      .then(res => setCharacters(res.data))
  }, [])

  return (
    <div>
      <h1>Diluc Wiki</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/characters/${character.slug}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage