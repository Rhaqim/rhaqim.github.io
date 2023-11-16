import { motion } from 'framer-motion'
import { Sun, Moon } from '@phosphor-icons/react'

const ThemeToggleButton = ({
  theme,
  toggleTheme
}: {
  theme: string
  toggleTheme: () => void
}) => {
  return (
    <motion.div
      style={{ display: 'inline-block' }}
      key={theme}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
        aria-label="Toggle Theme"
        colorScheme={theme}
        icon={theme === 'light' ? <Moon /> : <Sun />}
        onClick={toggleTheme}
      />
    </motion.div>
  )
}

export default ThemeToggleButton

type IconButtonProps = {
  icon: React.ReactNode
  onClick: () => void
  colorScheme: string
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  colorScheme
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        colorScheme === 'light'
          ? 'bg-purple-700 text-dark border-black'
          : 'bg-orange-200 text-base border-white'
      }
        relative m-2 p-2 border-1 rounded-md shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-200 ease-in-out`}
    >
      {icon}
    </button>
  )
}
