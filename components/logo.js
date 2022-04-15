import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  // const footPrintImg = `/images/footprint-dark.png`

  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image
            src={footPrintImg}
            alt="footprint"
            width="20px"
            height="20px"
          />
          <Text
            color={useColorModeValue('grey.800', 'WhiteAlpha.900')}
            fontFamily="bold"
            ml={2}
          >
            Rhaqim
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo