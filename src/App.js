import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ReviewNav from './components/ReviewNav'
import ReviewsList from './components/ReviewsList'
import FloatingButton from './components/FloatingButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <ReviewNav />
        <ReviewsList />
        <FloatingButton />
      </div>
    )
  }
}

export default App
