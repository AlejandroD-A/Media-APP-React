import React from 'react'
import { Menu, MenuItem } from './styles'
import useUser from 'hooks/useUser'

function PerspectiveMenu({ perspective, setPerspective }) {
  const { isLogged } = useUser()

  return (
    <Menu>
      {isLogged && (
        <MenuItem
          selected={perspective === 'perspective'}
          onClick={() => setPerspective('perspective')}
        >
          PERSPECTIVE!
        </MenuItem>
      )}

      <MenuItem
        selected={perspective === 'new'}
        onClick={() => setPerspective('new')}
      >
        NEW
      </MenuItem>
      <MenuItem
        selected={perspective === 'best'}
        onClick={() => setPerspective('best')}
      >
        BEST
      </MenuItem>
    </Menu>
  )
}

export default React.memo(PerspectiveMenu)
