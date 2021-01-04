import React, { useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  const [menu, setMenu] = useState(true)
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }, [])
  return (
    <div className='header'>
      <img
        src='https://s3-alpha-sig.figma.com/img/53e5/0684/e48c802ee39c73676eb5f920d7b53a0c?Expires=1610928000&Signature=SslhHzLab73KhGiZCZ23w~JkGi49OjwvkXEuFmdnZygtIZyJ54VaH~Ra~NBGhgca~lDdoJO4WmI3h7tOmtTDXVVGbGoJBZN9iDKrXK59jH0GeYpHQAwqVO5wJwzQ~8ix5J3an5p7PJeedNj7OzA~VYpRFjW5F4rzLcklNNjLExnV7npoA6BBAJCoGkJzMlh-5CznHrlKfRvtrzrrryhKQLjcQ2YRr1ZcEufg4hTr2kqZrNK~aPJAJfnwevLr3Ebn1PFoyKl827lRiRjdqZABHpF~8KWorFzRZLjZcfOwMTd9Xry1LgBDK7-mi7fwrlEHRTXnfAdVuSA0PRQwGHngdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        alt='logo'
        className='header__logo'
      />
      {menu ? (
        <div className='header__menu'>
          <MenuIcon onClick={() => setMenu(!menu)} className='menu__icon' />
          <ul className='nav_links'>
            <li className='nav_link'>Home</li>
            <li className='nav_link'>Products</li>
            <li className='nav_link'>About Us</li>
            <li className='nav_link'>Demos</li>
            <li className='nav_link'>Contact Us</li>
          </ul>
        </div>
      ) : (
        <MenuIcon onClick={() => setMenu(!menu)} className='menu__icon' />
      )}
    </div>
  )
}

export default Header
