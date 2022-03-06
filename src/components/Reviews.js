import React from 'react'
import profile1 from '../images/profile-1.jpg'
import profile2 from '../images/profile-2.jpg'
import profile3 from '../images/profile-3.jpg'
import { Quotes, Image, Name, Position }from '../styles/Reviews.jsx'

const Reviews = () => {
    const reviewsData = [
        {
          "id" : "0", 
          "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          "img": profile1, 
          "name": "Satish Patel", 
          "position": "Founder & CEO, Huddle"
        },
        {
          "id" : "1", 
          "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          "img": profile2, 
          "name": "Bruce McKenzie", 
          "position": "Founder & CEO, Huddle"
        },
        {
          "id" : "2", 
          "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
          "img": profile3, 
          "name": "Iva Boyd", 
          "position": "Founder & CEO, Huddle"
        }
      ];
    
  return (
   
       <Quotes>
    {
      reviewsData.map(review => (
        <div className="review">
          <p className="review__desc">{review.desc}</p>
          <div className="info__section">
            <Image src={review.img} alt="" className="profile__img"/>
            <Name>{review.name} <br /> <Position>{review.position}</Position></Name>
          </div>
        </div>
      ))
    }
  
    </Quotes>
  
  )
}

export default Reviews