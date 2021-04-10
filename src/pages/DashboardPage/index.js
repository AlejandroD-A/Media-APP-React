import React from 'react'
import Dashboard from 'components/Dashboard'
import PopularTopics from 'components/PopularTopics'
import NavBar from 'components/NavBar'
import { Container } from './styles'

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Dashboard />
        <PopularTopics />
      </Container>
    </>
  )
}
