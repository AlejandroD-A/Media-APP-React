import React from 'react'
import useUser from 'hooks/useUser'
import { Link } from 'react-router-dom'

import { Header as HeaderStyled, Logo, UserButton, LogButtons } from './styles'

function Header() {
  const { isLogged, user, logout } = useUser()

  return (
    <HeaderStyled>
      <Logo>
        <Link to="/">STORYBOARD</Link>
      </Logo>

      {isLogged ? (
        <>
          <UserButton>
            <span>{user.username}</span>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </UserButton>
        </>
      ) : (
        <LogButtons>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </LogButtons>
      )}
    </HeaderStyled>
  )
}

export default Header
