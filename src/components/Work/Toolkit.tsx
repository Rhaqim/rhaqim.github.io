import Image from 'next/image'
import React from 'react'

const ToolkitBadge = ({ name, icon }: { name: string; icon: string }) => (
  <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
    <Image
      src={`/images/toolkit/${icon}.png`}
      alt={name}
      width={12}
      height={12}
      className="w-12 h-12"
    />
    <span className="ml-1">{name}</span>
  </div>
)

const Toolkits = ({
  toolkits
}: {
  toolkits: { name: string; icon: string }[]
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {toolkits.map((toolkit, index) => (
        <ToolkitBadge key={index} name={toolkit.name} icon={toolkit.icon} />
      ))}
    </div>
  )
}

export default Toolkits
