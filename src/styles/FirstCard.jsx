import { Card, } from "react-bootstrap";
import styled from "styled-components";
;
export const CardStyle = styled(Card)`
 background-color:hsl(218, 28%, 13%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  font-family: "Raleway",sans-serif;
  margin-bottom: 2rem;
  border-color: transparent;
  margin: 0  5rem;
  width: 85%;
  font-size: 1.05em;
  font-weight: 400;
  max-width: 400px;
  @media screen and (max-width:375px){
      flex-direction: column;
  max-width: 10px;
  
 
    
              }
 
  `
export const CardConten = styled.div`
padding:7rem;
background-color:hsl(218, 28%, 13%);

`



