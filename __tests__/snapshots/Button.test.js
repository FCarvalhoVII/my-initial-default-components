import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '../../src/index'

it('renders correctly', () => {
    const tree = renderer.create(
        <Button>Default</Button>
    ).toJSON()

    expect(tree).toMatchSnapshot()
})