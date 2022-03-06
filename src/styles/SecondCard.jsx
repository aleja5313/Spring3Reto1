import styled from "styled-components";

    

export const SecondSelect = styled.div`
  width: 100%;
    padding: 90px;
    background-color: hsl(218, 28%, 13%);
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Raleway",sans-serif;
   
    @media screen and (max-width:375px){
      flex-direction: column;
    }  
    
`

export const Image =styled.img`
    width: 50%;
    margin: auto ;
    vertical-align: middle;
    margin-right:50px ;
  
    
    @media screen and (max-width:375px){
     
            width: 200px;
        
    }

    `

export const SecondLink = styled.a`
color: hsl(176, 68%, 64%);
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid hsl(176, 68%, 64%);
`
export const SecondTitle = styled.div`
font-weight: 900; 
font-size: 280%;
max-width:500px ;
margin-bottom: 10px ;

`
export const Imagen  = styled.img`
flex-direction:row ;
`