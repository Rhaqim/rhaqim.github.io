'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import Navbar from '../NavBar'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <main
      className={` flex justify-center ${
        theme === 'light' ? 'bg-base text-base' : 'bg-dark text-dark'
      }`}
    >
      <div className="w-full md:w-1/2 overflow-hidden">
        <div className='fixed top-0 left-0 z-10 backdrop-blur-lg w-full'>
          <Navbar />
        </div>
        <motion.article
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.7, type: 'easeInOut' }}
          style={{ position: 'relative' }}
          className="flex flex-col min-h-screen w-full justify-start py-4 my-4 mt-8"
        >
          {children}
        </motion.article>
      </div>
    </main>
  )
}

export default HomeLayout
