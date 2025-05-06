const Header = () => {
  return (
    <nav className=''>
      <a href='/' className=''>LOGO</a>

      <ul className=''>
        <li className=''>
          <a href='/' className=''>Home</a>
        </li>
        <li className=''>
          <a href='/dashboard' className=''>Dashboard</a>
        </li>
        <li className=''>
          <a href='/secret' className=''>Secret</a>
        </li>
        <li className=''>
          <a href='/login' className=''>Login</a>
        </li>
        <li className=''>
          <a href='/signup' className=''>Signup</a>
        </li>
      </ul>
    </nav>
  )
}
export default Header
