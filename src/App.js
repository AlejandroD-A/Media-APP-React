import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DashboardPage from 'pages/DashboardPage'
import RegisterPage from 'pages/RegisterPage'
import LoginPage from 'pages/LoginPage'
import Header from 'components/Header'
import Container from 'layout/Container'

import UserContextProvider from 'context/UserContext'
import ShortContextProvider from 'context/ShortContext'

import { GlobalStyles } from 'styles/GlobalStyles'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <UserContextProvider>
        <ShortContextProvider>
          <Container>
            <Router>
              <Header />

              <main>
                <Switch>
                  <Route component={DashboardPage} exact path="/" />
                  <Route component={RegisterPage} exact path="/register" />
                  <Route component={LoginPage} exact path="/login" />
                  <Route exact path="/user/:id" />
                </Switch>
              </main>
            </Router>
          </Container>
        </ShortContextProvider>
      </UserContextProvider>
    </>
  )
}
