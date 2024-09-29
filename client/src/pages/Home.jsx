import React from 'react'
import Header from '../components/Header'
import Trend from '../components/Trend'
import Popular from '../components/Popular'
import JoinUs from '../components/JoinUs'

const Home = () => {
  return (
    <div>
        <Header />
        <Trend />
        <Popular />
        <JoinUs />
    </div>
  )
}

export default Home