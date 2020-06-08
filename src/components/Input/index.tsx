import React from 'react'

import { Label } from './styles'

export interface Props {
    name: string
    value: string
    setValue: (text: string) => void
    backgroundColor?: string
    borderRadius?: string
    color?: string
    inputColor?: string
    type?: string
    placeholder?: string
    placeholderColor?: string
    icon?: React.ReactNode | React.Component
}

export interface ILabel {
    icon?: React.ReactNode | React.Component
    backgroundColor?: string
    borderRadius?: string
    inputColor?: string
    placeholderColor?: string
}

export const Input: React.FC<Props> = ({
    name,
    backgroundColor = '#1c1b20',
    borderRadius = '5px',
    color = '#fff',
    inputColor = '#007fff',
    placeholderColor = 'rgba(255, 255, 255, 0.2)',
    type = 'text',
    value,
    setValue,
    placeholder,
    icon
}) => {
    return (
        <Label 
            htmlFor={name} 
            inputColor={inputColor}
            borderRadius={borderRadius}
            color={color}
            icon={icon}
            placeholderColor={placeholderColor} 
            backgroundColor={backgroundColor}
        >
            <input 
                type={type}
                name={name}
                arial-label={name}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
            { icon && icon }
        </Label>
    )
}