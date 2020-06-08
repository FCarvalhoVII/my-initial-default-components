import React from 'react'

import { Button } from './styles'

export interface Props {
    borderRadius?: string
    gradientColor?: string
    shadowColor?: string
    color?: string
    onClick?: () => void
}

export const ButtonGradient: React.FC<Props> = ({
    children,
    borderRadius = '20px',
    gradientColor = 'top, #000046, #1cb5e0',
    shadowColor = '#000046',
    color = '#fff',
    ...props
}) => {
    return (
        <Button
            borderRadius={borderRadius}
            gradientColor={gradientColor}
            shadowColor={shadowColor}
            color={color}
            { ...props }
        >
            { children }
        </Button>
    )
}