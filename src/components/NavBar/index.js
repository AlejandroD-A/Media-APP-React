import React from 'react'
import CreateShort from 'components/CreateShort'

import {
  NavBar as NavBarStyled,
  HeartIcon,
  ShortIcon,
  PostIcon,
  List,
  ItemList,
  Anchor
} from './styles'

import useUser from 'hooks/useUser'

function NavBar() {
  const { isLogged } = useUser()
  return (
    <>
      <NavBarStyled>
        <List>
          <ItemList>
            <Anchor>
              <ShortIcon />
              SHORT
            </Anchor>
          </ItemList>
          <ItemList>
            <Anchor>
              <PostIcon />
              POST
            </Anchor>
          </ItemList>
          <ItemList>
            <Anchor>
              <HeartIcon />
              FAVS
            </Anchor>
          </ItemList>
        </List>
      </NavBarStyled>

      {isLogged && <CreateShort />}
    </>
  )
}

export default React.memo(NavBar)
