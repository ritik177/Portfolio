import React from 'react'
import {BsLinkedin ,BsTelegram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => { 
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ritik-patel-3931b5258/" target='_blank' className='linkedin'><BsLinkedin/> </a>
        <div className="hide1">linkedin</div>
        <a href="https://github.com/ritik177" target='_blank' className='github'><FaGithub/></a>
        <div className="hide2">github</div>
        <a href="https://instagram.com/ritikpatel881?igshid=MzNlNGNkZWQ4Mg==" target='_blank' className='instagram'><BsInstagram/></a>
        <div className="hide3">Instagram</div>
        <a href="https://web.telegram.org/k/" target='_blank' className='telegram'><BsTelegram/></a>
        <div className="hide4">Telegram</div>
    </div>
  )
}

export default HeaderSocials