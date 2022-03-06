
import styled from "styled-components";


export const NavBar = styled.div` 
 background-color:hsl(218, 28%, 13%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    
    `

export const ImgLogo = styled.img`
width: 270px;
padding: 4rem;
`

export const NavBarUl = styled.ul`
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    margin:40px;    
    a{
        color: white;
        font-family: "Raleway",sans-serif;
        font-size: 21px;
        opacity: .8;
        text-decoration: none;
        margin-left: 35px;

        &:hover{
            font-weight: bold;
            text-decoration: underline;
        }
    }
    
`

