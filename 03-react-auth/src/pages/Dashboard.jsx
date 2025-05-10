import { useState, useEffect } from 'react'
import { getMeUserService } from '@/services/userServices'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { status, data } = await getMeUserService(token)
        if (status === 200) {
          setUser(data)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    if (token) {
      fetchUser()
    }
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {user?.first_name && <h4>Nombre: {user.first_name}</h4>}
      {user?.last_name && <h4>Apellido: {user.last_name}</h4>}
      {user?.gender && <h4>Genero: {user.gender}</h4>}
      {user?.email && <h4>Email: {user.email}</h4>}
      {user?.role && <h4>Role: {user.role}</h4>}
    </>
  )
}
export default Dashboard
