import React from 'react'
import { Text } from '../Text/index.styles'
import { StyledButton } from './index.styles'

interface Props {
  label: string;
  variant?: "filled" | "outlined";
  color?: "primary";

  onClick?: () => void;
}

const Button: React.FC<Props> = ({ 
  label, 
  variant = "filled", 
  onClick = () => {} 
}) => {
  return (
    <StyledButton variant={variant}>
      <Text color="white">
        {label}
      </Text>
    </StyledButton>
  )
}

export default Button