import Link from 'next/link'
// import Image from 'next/image'

const Logo = ({ theme }: { theme: string }) => {
  //   const footPrintImg = `/images/footprint${
  //     theme === 'light' ? '-dark' : ''
  //   }.png`

  return (
    <Link
      href={'/'}
      className="inline-flex items-center p-[10px] leading-5 h-[30px] z-10"
    >
      {/* <Image
        src={footPrintImg}
        alt="footprint"
        width="20"
        height="20"
        className="h-[20px] w-[20px]"
      /> */}
      <p
        className={`font-bold ml-2 ${
          theme === 'light' ? 'text-base' : 'text-dark'
        }`}
      >
        Rhaqim
      </p>
    </Link>
  )
}

export default Logo
