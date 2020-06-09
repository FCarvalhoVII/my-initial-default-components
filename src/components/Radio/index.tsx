// @ts-nocheck
import React, { forwardRef } from 'react'

import { Label, Radio, Mark } from './styles'

export interface Props {
    label: string
    name: string
    value: any
    color?: string
    radioColor?: string
    markColor?: string
    defaultChecked?: boolean
    checked?: boolean
    readOnly?: boolean
    onChange?: () => void
}

const RadioWrapper = forwardRef(
    ({ 
        label, 
        name, 
        value,
        color = '#fff',
        radioColor = '#007fff',
        markColor = '#fff',
        ...props 
    }: Props, ref) => {
        const { readOnly, onChange } = props

        return (
            <Label 
                onClick={readOnly ? () => {} : onChange} 
                htmlFor={name}
                color={color}
                radioColor={radioColor}
            >
                { label }

                <Radio { ...props } ref={ref} name={name} value={value} />
                <Mark markColor={markColor} />
            </Label>
        )
    }
)

export { RadioWrapper as Radio };