import React from 'react'

import { FullScreen, Container, Close } from './styles'

export interface Props {
    backgroundColor?: string
    color?: string
    colorTitle?: string
    closeColor?: string
    open: boolean
    setOpen: (newValue: boolean) => void
    title: string
}

export interface IContainer {
    backgroundColor?: string
    color?: string
    colorTitle?: string
}

export interface IClose {
    closeColor?: string
}

export interface IFullScreen {
    open: boolean
}

export const Modal: React.FC<Props> = ({
    backgroundColor = '#2f2e35',
    color = '#d5d5d5',
    colorTitle = '#fff',
    closeColor = 'rgba(255, 255, 255, 0.3)',
    open,
    setOpen,
    title,
    children,
    ...props
}) => {
    return (
        <FullScreen open={open}>
            <Container 
                backgroundColor={backgroundColor} 
                title={title}
                colorTitle={colorTitle}
                color={color} {...props} 
            >
                <Close closeColor={closeColor} onClick={() => setOpen(false)}>X</Close>

                <h2>{title}</h2>

                { children }
            </Container>
        </FullScreen>
    )
}