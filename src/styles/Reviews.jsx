import styled from "styled-components"

export const Quotes = styled.section`
width: 100%;
padding: 90px;
background-color: hsl(218, 28%, 13%);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
color:white;


@media screen and (max-width:850px){
    flex-direction: column;
}
 >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans",sans-serif;
        background-color: hsl(217, 28%, 15%);
        border-radius: 8px;
        box-shadow: 5px 5px 5px 0px hsl(217, 28%, 15%);
        text-align: left;
        max-width: 350px;
        margin: 15px;
        padding: 30px 30px;
        z-index: 10; 
    }
    `

export const Image = styled.img`
width: 45px;
height: 45px;
border-radius:50px ;
float: left ;

`
export const Name = styled.p`
margin-left: 4rem;
display: flex;
flex-direction: column;
justify-content: space-around;
font-family: "Open Sans",sans-serif;

    
`
export const Position = styled.span`
font-size: 13px;
margin-top:5px;
`