import React from 'react'

type LinkButtonProps = {
  children: React.ReactNode
  bg?: string
  color?: string
  p?: number
  onClick?: () => void
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  bg,
  color,
  p,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        bg ? `bg-${bg}` : 'bg-transparent'
      } text-${color} font-semibold hover:text-#202023 py-${p} px-4 border border-transparent rounded`}
    >
      {children}
    </button>
  )
}

export default LinkButton
