import React from 'react'

type MenuButtonProps = {
  icon: React.ReactNode
  onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-700 hover:border-gray-700"
    >
      {icon}
    </button>
  )
}

export default MenuButton
