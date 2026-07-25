import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../api'
import './CharacterPage.css'

function CharacterPage() {
  const { slug } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    api.get(`/characters/${slug}/`)
      .then(res => setCharacter(res.data))
  }, [slug])

  if (!character) return (
    <div className="loading">
      <p>Loading...</p>
    </div>
  )

  return (
    <div>
      <header className="char-header">
        <Link to="/">Diluc Wiki</Link>
      </header>

      <main className="char-main">
        <div className="char-intro">
          <h1>{character.name}</h1>
          <p>{character.description}</p>
        </div>

      {character.sections.map(section => (
        <div key={section.id} className="char-section">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
      </main>
    </div>
  )
}

export default CharacterPage