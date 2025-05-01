import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongList />
      </div>

      <div className='derecho'>
        <SongDetails />
      </div>
    </div>
  )
}
export default Home
