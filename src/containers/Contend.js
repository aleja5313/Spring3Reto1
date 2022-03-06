import React from 'react'
import FirstCard from '../components/FirstCard'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PageFooter from '../components/PageFooter'
import Reviews from '../components/Reviews'
import SecondCard from '../components/SecondCard'
import SingUp from '../components/SingUp'




const container = () => {
  return (
    <div>
      
      <Header/>
      <Hero/>
      <FirstCard/>
      <SecondCard/>
      <Reviews/>
      <SingUp/>
      <PageFooter/>
      
      
    
    
    </div>
  )
}

export default container