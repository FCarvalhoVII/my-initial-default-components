import React, { forwardRef } from 'react'

import { Label, Box, Mark } from './styles'

export interface Props {
    label: string
    color?: string
    name: string
    value: any
    markColor?: string
    defaultChecked?: boolean
    checked?: boolean
    readOnly?: boolean
    onChange?: () => void
}

export interface ILabel {
    markColor?: string
    color?: string
}

export interface IBox {
    ref: any
}

export const CheckBox = forwardRef(
    ({ label, name, color = '#fff', value, markColor = '#007fff', ...props }: Props, ref) => {
        const { readOnly, onChange } = props

        return (
            <Label 
                onClick={readOnly ? () => {} : onChange}
                htmlFor={name}
                color={color}
                markColor={markColor}
            >
                { label }

                <Box {...props} ref={ref} name={name} value={value} />
                <Mark />
            </Label>
        )
    }
);