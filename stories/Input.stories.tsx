import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { MdSearch } from 'react-icons/md'

import { Input } from '../src'

storiesOf('Input', module)
    .add('Default', () => {
        const [inputValue, setInputValue] = useState('')

        return (
            <Input
                name="input"
                placeholder="Type here..."
                value={inputValue}
                setValue={setInputValue}
            />
        )
    })
    .add('With icon', () => {
        const [inputValue, setInputValue] = useState('')

        return (
            <Input
                name="input"
                icon={<MdSearch />}
                placeholder="Type here..."
                value={inputValue}
                setValue={setInputValue}
            />
        )
    })