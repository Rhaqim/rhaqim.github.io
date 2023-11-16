'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Hamburger } from '@phosphor-icons/react'
import { useTheme } from '@/context/ThemeContext'
import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'
import MenuButton from './MenuButton'
import LinkItem from './LinkItems'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

const Navbar = () => {
  const currentPath = usePathname()
  const { theme, toggleTheme } = useTheme()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="px-2 flex items-center justify-between">
      <Logo theme={theme} />
      <div className="hidden md:block">
        {navItems.map(item => (
          <LinkItem key={item.href} href={item.href} path={currentPath}>
            <p>{item.label}</p>
          </LinkItem>
        ))}
      </div>
      <div className="flex space-x-2 items-center">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        <div className="block md:hidden">
          <MenuButton icon={<Hamburger />} onClick={toggleMobileMenu} />
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-0 right-0 md:hidden`}
      >
        {navItems.map((item, index) => (
          <LinkItem key={index} href={item.href} path={currentPath}>
            <p>{item.label}</p>
          </LinkItem>
        ))}
      </div>
    </div>
  )
}

export default Navbar
