import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Modal, Button } from '../src'

storiesOf('Modal', module).add('Test Modal', () => {
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open modal</Button>

            <Modal title="Title test" open={open} setOpen={setOpen}>Test</Modal>
        </React.Fragment>
    )
})