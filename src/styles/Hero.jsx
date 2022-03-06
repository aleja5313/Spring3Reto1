
import styled from "styled-components";


export const HeroSection = styled.div` 
background-color: hsl(218, 28%, 13%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 25px;
  
  `
export const HeroTitle = styled.h1` 
 max-width: 600px;
  margin-bottom: 5px;
  color:white;
  font-family: "Raleway",sans-serif;
  `

export const HeroDesc = styled.p` 
  max-width: 600px;
  margin-bottom: 10px;
  padding: 0 25px;
  max-width: 400px;
  margin-bottom: 10px;
  color: white;
  font-family: "Raleway",sans-serif;
  
  `

export const Button = styled.button`
    width:260px;
    height:60px;
    border-radius:50px;
    border:none;
    background-image:linear-gradient(to right, hsl(176, 68%, 64%),hsl(198, 60%, 50%));
    color:white;
    font-family: 'Raleway', sans-serif;
    font-weight:700;
    font-size:1.25em;
    margin-top:20px;
    cursor:pointer;
    box-shadow:0px 1px 1px 1px hsl(198, 60%, 50%);
    &:hover{
      color: hsl(176, 68%, 64%);
    }
    `
export const Image = styled.img`
    width:45%;
    
    `

