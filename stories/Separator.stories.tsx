import React from 'react'
import { storiesOf } from '@storybook/react'

import { Separator } from '../src'

storiesOf('Separator', module).add('Default', () => (
    <div
        style={{
            width: '300px',
            border: '1px solid #666',
            padding: '20px 10px',
            backgroundColor: '#1a1a1f'
        }}
    >
        <Separator />
    </div>
))