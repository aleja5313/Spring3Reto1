import styled from "styled-components";

export const Form= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    background-color: hsl(218, 28%, 13%);
    >div{
        width: 800px;
        padding: 20px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: hsl(218, 28%, 13%);
        color: white;
        text-align: center;
        border-radius: 1rem;
        box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
        position: relative;
        bottom: -80px;
        z-index: 10;
        max-width: 75vw;
        h3{
            font-family: "Raleway",sans-serif;
            font-weight: 700;
            letter-spacing: 1.2px;
            margin: 10px 0;
        }
        >p{
            font-family: "Raleway",sans-serif;
            width: 85%;
            margin: 10px 0;
            font-weight: 400;
            
        }
        form{
            width: 90%;
            margin: 10px 0;
            padding: 5px 0 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: relative;
            
            input{
                margin-right: 20px;
                padding: 10px 15px;
                flex-grow: 1;
                font-family: "Raleway",sans-serif;
                border: none;
                border-radius: 25px;
                z-index: 20;
                
            }
            button{
                padding: 2rem 1rem ;
                font-size: 16x;
                font-family: "Raleway",sans-serif;
                font-weight: 700;
                text-transform: capitalize;
                border: none;
                border-radius: 5rem;
                background-image:linear-gradient(to right, hsl(176, 68%, 64%),hsl(198, 60%, 50%));
                color:white;
                &:hover{            
                    background-color: hsl(176, 68%, 64%);
                }
            }
            p{
                font-family: "Raleway",sans-serif;
                margin-left: 15px;
                font-size: 12px;
                font-weight: 700;
                color: hsl(0, 100%, 63%);
                position: absolute;
                bottom: 27px;
                -webkit-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;
                visibility: hidden;
                &.alerta{
                    bottom: 0;
                    visibility: visible;
                }
            }
        }
        @media screen and (max-width:375px){
            width: 95%;
            bottom: -140px;
            form{
                flex-direction: column;
                input, button{
                    margin: 10px 0;
                    width: 100%;
                    z-index: 20;
                }
                >p{
                    margin: 0;
                }
            }
        }
    }
`