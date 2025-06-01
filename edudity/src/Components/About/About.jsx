import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play_icon' onClick={()=>
            {setPlayState(true)}} />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla excepturi dolores ratione neque aliquam sapiente atque deleniti dolorem sed cum! Fugiat magni inventore ut asperiores temporibus dignissimos est. Harum dolores nobis quibusdam ab delectus voluptatum architecto doloribus! Modi voluptas, aliquid est animi consectetur itaque, sequi amet sint eveniet possimus ea.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis est autem veritatis inventore deleniti, similique fugiat? Ad optio doloremque ipsa ratione maiores repudiandae omnis est voluptatem deserunt, libero beatae quisquam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, esse enim quam deserunt dicta repellat ex eligendi! Tenetur, voluptate distinctio?</p>
        </div>
    </div>
  )
}

export default About
