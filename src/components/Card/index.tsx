import React from 'react'

import { Container } from './styles'

interface Props {
    title: string
}

export const Card: React.FC<Props> = ({
    title,
    children,
    ...props
}) => {
    return (
        <Container title={title} {...props}>
            <h2>{ title }</h2>

            { children }
        </Container>
    )
}