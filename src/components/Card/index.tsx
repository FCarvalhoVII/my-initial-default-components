import React from 'react'

import { Container } from './styles'

export interface Props {
    backgroundColor?: string
    borderRadius?: string
    color?: string
    title: string
}

export const Card: React.FC<Props> = ({
    backgroundColor = '#2f2e35',
    borderRadius = '10px',
    color = '#ddd',
    title,
    children,
    ...props
}) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            color={color}
            title={title} 
            {...props}
        >
            <h2>{ title }</h2>

            { children }
        </Container>
    )
}