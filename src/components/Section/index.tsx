'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { useTheme } from '@/context/ThemeContext'

const Section = ({
  title,
  description,
  delay,
  id,
  children
}: {
  title: string
  description: string
  delay: number
  id: string
  children: ReactNode
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useVisibility(sectionRef)

  const { theme } = useTheme();

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, delay: isVisible ? 0 : delay }}
      className="flex flex-col items-center justify-start w-full p-5 min-h-screen section-container"
    >
      <div className="flex flex-col md:flex-row md:justify-between space-y-2 w-full mb-[2rem] p-2 h-[100px] items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: isVisible ? 0 : 0.5 }}
          
        >
          <SectionHeader title={title} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: isVisible ? 0 : 0.5 }}
          className={`flex items-center text-center justify-center border p-4 rounded-md border-gray-200} ${
            theme === 'dark' ? 'text-white bg-[#75339c] border-white' : 'bg-gray-500 text-white border-black'
          }`}
        >
          {description}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: isVisible ? 0 : 0.5 }}
        className='p-2 flex flex-col space-y-4 w-full'
      >
        {children}
      </motion.div>
    </motion.section>
  )
}

export default Section

const useVisibility = (ref: React.RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0)
      }
    }
    const scrollHandler = () => {
      handleScroll()
    }

    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', scrollHandler)

    // Initial check on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', scrollHandler)
    }
  }, [ref])

  return isVisible
}
