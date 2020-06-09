import React from 'react'

import { Hr } from './styles'

export interface Props {
    color?: string
}

export const Separator: React.FC<Props> = ({ 
    color = '#1a1a1f, #007fff, #1a1a1f'
}) => {
    return (
        <Hr color={color} />
    )
}
