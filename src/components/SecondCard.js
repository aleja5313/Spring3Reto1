import React from 'react'
import { Image } from '../styles/SecondCard'
import { SecondSelect, SecondLink, SecondTitle } from '../styles/SecondCard'
import icon from '../images/icon-arrow.svg'

const SecondCard = () => {
  return (

    <SecondSelect >
      <Image src='https://i.ibb.co/mDTV4yN/illustration-stay-productive.png' alt="" width='45%' />
      <div >
        <SecondTitle> Stay productive, wherever you are</SecondTitle>
        <div >
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>
          <p >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <SecondLink href="frontendmentor.io" >See how Fylo works<img src={icon} alt="" /></SecondLink>
      </div>


    </SecondSelect>



  )
}

export default SecondCard