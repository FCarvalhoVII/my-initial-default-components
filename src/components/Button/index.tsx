import React from 'react'

import { Container } from './styles'

export interface Props {
    backgroundColor?: string
    borderRadius?: string
    color?: string
    outlined?: boolean
    onClick?: () => void
    disabled?: boolean
}

const ButtonWrapper: React.FC<Props> = ({ 
    children, 
    backgroundColor = '#007fff',
    borderRadius = '50px',
    color = '#fff',
    outlined = false,
    ...props
}) => {
    return (
        <Container 
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            color={color}
            outlined={outlined}
            { ...props }
        >
            { children }
        </Container>
    )
}

export { ButtonWrapper as Button }