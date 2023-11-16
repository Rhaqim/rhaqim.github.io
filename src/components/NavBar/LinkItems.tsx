'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import LinkButton from './LinkButton'

type LinkItemProps = {
  children: React.ReactNode
  href: string
  path: string
}

const LinkItem: React.FC<LinkItemProps> = ({ children, href, path }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(path === href)
  }, [path, href])

  const inActiveColor = 'gray-300'
  return (
    <Link href={href}>
      <LinkButton
        p={2}
        bg={active ? 'purple-200' : undefined}
        color={active ? '[#202023]' : inActiveColor}
      >
        {children}
      </LinkButton>
    </Link>
  )
}

export default LinkItem
