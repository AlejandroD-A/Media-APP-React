import React from 'react'

import { CardList as CardListStyled } from './styles'

function CardList({ children }) {
  return <CardListStyled>{children}</CardListStyled>
}

export default React.memo(CardList)
