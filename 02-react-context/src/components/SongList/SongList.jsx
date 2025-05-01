import { useSongContext } from '@/hooks/useSongContext'
import './songlist.css'

const SongList = () => {
  const { songs, loading, setSelectedSong } = useSongContext()

  return (
    <section className='row-cointainer'>
      {
            loading
              ? <h2> Cargando...</h2>
              : songs.map((song) => (
                <div
                  className='row-song'
                  key={song.id}
                  onClick={() => setSelectedSong(song)}
                >
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>))
        }
    </section>
  )
}
export default SongList
