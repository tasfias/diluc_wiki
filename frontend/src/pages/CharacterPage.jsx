import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

function CharacterPage() {
  const { slug } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    api.get(`/characters/${slug}/`)
      .then(res => setCharacter(res.data))
  }, [slug])

  if (!character) return <p>Loading...</p>

  return (
    <div>
      <h1>{character.name}</h1>
      <p>{character.description}</p>

      {character.sections.map(section => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  )
}

export default CharacterPage