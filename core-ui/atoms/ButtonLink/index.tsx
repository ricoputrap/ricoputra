import Link from 'next/link'
import React from 'react'
import { Text } from '../Text/index.styles';
import { Button } from './index.styles';

interface Props {
  link: string;
  label: string;
  variant?: "filled" | "outlined";
  textTransform?: "initial" | "lowercase" | "uppercase" | "capitalize";
}

const ButtonLink: React.FC<Props> = ({
  link,
  label,
  variant = "filled",
  textTransform = "initial",
}) => {
  return (
    <Link href={link}>
      <Button
        variant={variant}
        textTransform={textTransform}
      >
        <Text color="active">
          {label}
        </Text>
      </Button>
    </Link>
  )
}

export default ButtonLink