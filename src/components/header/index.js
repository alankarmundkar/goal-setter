'use client'

import { useState, useEffect } from 'react'


import Logo from '../logo'

import './style.scss'
import { bemClass } from '@/utils'

const blk = 'header'

const Header = () => {

  const [yScroll, setYSroll] = useState(0)
 
  const handleScroll = () => {
    setYSroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const isOpaque = yScroll > 76

  return (
    <header className={blk}>
      <div className={bemClass([blk, 'nav', { 'opaque': true }])}>
        <Logo isOpaque={true} />
      </div>
    </header>
  )
}

export default Header
