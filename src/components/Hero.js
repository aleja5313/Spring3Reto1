import React from 'react'
import { HeroSection, HeroTitle, Image,HeroDesc,Button } from '../styles/Hero'


const Hero = () => {
  return (
    <HeroSection>
         <Image src="https://i.ibb.co/kMJ7vTd/illustration-intro.png" alt="" />
      <HeroTitle>All your files in one secure location, accessible anywhere.</HeroTitle>
      <HeroDesc>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</HeroDesc>
      <Button>Get Started</Button>
    </HeroSection>
  )
}

export default Hero