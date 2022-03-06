import styled from "styled-components"


export const FooterSocial = styled.div`
  align-self: center;
  margin: 35px 0;
  color:white;
  
`
export const Icon = styled.i`
border: 1px solid white;
border-radius: 50%;
padding: 10px;
border: solid 1px white;
                
                &:hover{
                    color: hsl(176, 68%, 64%);

                }
`

export const Image =styled.img`
  width: 180px;
        position: absolute;
        left: 5%;
`
export const Footer = styled.footer`
    width: 100%;
    padding: 10rem 1rem;
    background-color: hsl(216, 53%, 9%);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    position: relative;

    >div{
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;



       
        div, a{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 15px;  
            margin-left:30px;
            
        }

        p, >a{
            color: white;
            text-decoration: none;
            max-width: 300px;
            margin-left: 15px;
        }
        >a:hover{
            font-weight: bold;
        }
    }
    @media screen and (max-width:800px){
        padding-top: 170px;
        flex-direction: column;
        img{
            position: relative;
        }
        >div{
            margin: 15px 5%;
            &:last-child{
                width:100%;
                margin: 15px 0;
                div{
                    width: 100%;
                    justify-content: center;
                }
            }
        }
    }

`