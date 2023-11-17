import Image from 'next/image'
import React from 'react'

const ToolkitBadge = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex flex-col space-y-2 items-center justify-center hover:rotate-2 transition-all duration-100 ease-linear">
    <div className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg border border-neutral-400 bg-transparent">
      <Image
        src={`/images/toolkit/${logo}.svg`}
        alt={name}
        width={12}
        height={12}
        className="w-6 h-6"
      />
    </div>
    <p className="text-sm text-neutral-400 text-center">{name}</p>
  </div>
)

const Toolkits = ({
  toolkits
}: {
  toolkits: { name: string; logo: string }[]
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {toolkits.map((toolkit, index) => (
        <ToolkitBadge key={index} name={toolkit.name} logo={toolkit.logo} />
      ))}
    </div>
  )
}

export default Toolkits
