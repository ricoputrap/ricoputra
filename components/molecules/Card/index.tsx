import { Box, Stack } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image';
import React from 'react'

type Props = {
  children: React.ReactNode,
  coverImg: string | StaticImageData;
  url: string;
}

const Card: React.FC<Props> = ({ children, coverImg, url }) => {
  return (
    
      <Stack
        width={372}
        height={303}
        borderRadius="5px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      >
        <a
          href={ url }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box height={200} width="100%" overflow="hidden" borderTopRadius="5px">
            <Image src={coverImg} alt="card-cover" />
          </Box>
          <Stack padding="12px" marginTop="0 !important">
            { children }
          </Stack>
        </a>
      </Stack>
    
  )
}

export default Card