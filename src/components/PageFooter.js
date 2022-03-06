import React from 'react'
import locationIcon from '../images/icon-location.svg';
import phoneIcon from '../images/icon-phone.svg';
import emailIcon from '../images/icon-email.svg';
import { Footer, FooterSocial, Icon, Image} from '../styles/PageFooter'

const PageFooter = () => {
  return (
    <Footer>
        <Image src='https://i.ibb.co/ZzHvXHR/logo-fylo.png' alt='' width="130px"/>
        <div>
            <div>
                <img src={locationIcon} alt=""  />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div>
            <div>
                <img  src={phoneIcon} alt="" />
                <p>+1-543-123-4567</p>
            </div>
            <div>
                <img src={emailIcon} alt=''/>
                <p>example@fylo.com</p>
            </div>
        </div>
        <div>
            <a href='#root'>About us</a>
            <a href='#root'>Jobs</a>
            <a href='#root'>Press</a>
            <a href='#root'>Blog</a>
        </div>
        <div>
            <a href='#root'>Contact us</a>
            <a href='#root'>Terms</a>
            <a href='#root'>Privacy</a>
        </div>
        <div>
      </div>
      <FooterSocial>
        <Icon className="fab fa-facebook-f socials__icon"></Icon>
        <Icon className="fab fa-twitter socials__icon"></Icon>
        <Icon className="fab fa-instagram socials__icon"></Icon>
      </FooterSocial>
    
    </Footer>
  )
}

export default PageFooter