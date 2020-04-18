import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../src'

storiesOf('Card', module).add('Card', () => {
    return (
        <Card title="Title of the card">Testing the component</Card>
    )
})