import React from 'react'
import { storiesOf } from '@storybook/react'

import { Title } from '../src'

storiesOf('Title', module).add('Default', () => <Title fontSize="60px">Title</Title>)