import React from 'react'
import Image from 'next/image'

type Lang =
  | 'go'
  | 'python'
  | 'rust'
  | 'java-script'
  | 'c-'
  | 'typescript'
  | 'c'
  | 'c++'
  | 'bash'
  | 'golang'
  | 'powershell'
  | 'shell'
  | 'sql'
  | 'visual-basic'
  | 'xml'
  | 'zsh'

const ProgLogos = ({ lang }: { lang: Lang }) => {
  return (
    <div>
      <Image
        src={`/images/programming_logos/${lang}.png`}
        alt={`${lang} logo`}
        width={50}
        height={50}
        className='h-10 w-10'
      />
    </div>
  )
}

export default ProgLogos
