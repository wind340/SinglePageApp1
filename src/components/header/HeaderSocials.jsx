import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiNotion} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.notion.so/jakedevchek/" target="_blank"><SiNotion/></a>
      <a href="https://github.com/wind340/" target="_blank"><BsGithub/></a>
      <a href="https://www.instagram.com/a_jc.k/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials