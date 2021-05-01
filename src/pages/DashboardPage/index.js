import React from 'react'
import Dashboard from 'components/Dashboard'
import PopularTopics from 'components/PopularTopics'
import { Container } from './styles'

export default function DashboardPage() {
  return (
    <>
      <Container>
        <Dashboard />
        <PopularTopics />
      </Container>
    </>
  )
}
