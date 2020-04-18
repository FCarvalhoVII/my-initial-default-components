import React from 'react'

import { Button } from './styles'

export interface Props {
    background?: string
    color?: string
    onClick?: () => void
}

export const ButtonGradient: React.FC<Props> = ({
    children, 
    background, 
    color = '#fff',
    ...props
}) => {
    return (
        <Button 
            background={background} 
            color={color}
            { ...props }
        >
            { children }
        </Button>
    )
}