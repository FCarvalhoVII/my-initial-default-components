import React from 'react'

import { H1 } from './styles'

export interface Props {
    color?: string
    fontSize?: string
}

export const Title: React.FC<Props> = ({
    children,
    color = '#007fff, #33333399',
    fontSize = '30px',
    ...props
}) => {
    return (
        <H1
            color={color}
            fontSize={fontSize}
            { ...props }
        >
            { children }
        </H1>
    )
}