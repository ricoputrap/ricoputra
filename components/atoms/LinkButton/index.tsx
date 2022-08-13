import { Button, Text } from '@chakra-ui/react'
import React from 'react'

import { IconType } from "react-icons"

type Props = {
  Icon: IconType;
  iconColor: string;
  textColor: string;
  label: string;
  url: string;
}

const LinkButton: React.FC<Props> = ({ Icon, iconColor, textColor, label, url }) => {
  return (
    <a
      href={ url }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        leftIcon={<Icon />}
        color={ iconColor }
        outlineColor="blueLinkedIn"
        outlineOffset={0}
      >
        <Text color={ textColor }>
          { label }
        </Text>
      </Button>
    </a>
  )
}

export default LinkButton