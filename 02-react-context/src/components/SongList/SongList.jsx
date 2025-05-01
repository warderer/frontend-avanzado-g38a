import { useState, useEffect } from 'react'
import canciones from '@/assets/listaCanciones.json'
import './songlist.css'

const SongList = () => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)

  // Simulo una llamada a una API
  useEffect(() => {
    setTimeout(() => {
      setSongs(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <section className='row-cointainer'>
      {
            loading
              ? <h2> Cargando...</h2>
              : songs.map((song) => (
                <div className='row-song' key={song.id}>
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>))
        }
    </section>
  )
}
export default SongList
