import { Box, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  title: string;
  stacks: string[];
}

const TechStackRow: React.FC<Props> = ({ title, stacks }) => {
  return (      
      <Box 
        display="flex"
        gap={2}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "unset" }}
      >
        <Text fontWeight="bold">{ title }</Text>
        <Text>—</Text>

        {stacks.map((item, index) => (
          <Box key={item} display="flex" gap={2}>
            {(index > 0) && (
              <Text>·</Text>
            )}
            <Text>{item}</Text>
          </Box>
        ))}
      </Box>
  )
}

export default TechStackRow