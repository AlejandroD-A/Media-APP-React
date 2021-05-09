import React from 'react'

import { CardList as CardListStyled } from './styles'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function CardList({ children }) {
  return (
    <CardListStyled>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry>{children}</Masonry>
      </ResponsiveMasonry>
    </CardListStyled>
  )
}

export default React.memo(CardList)
