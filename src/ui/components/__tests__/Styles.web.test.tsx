import React from 'react'

import { render } from 'tests/utils/web'

import { Style } from '../Style'

describe('Style', () => {
  it('should render a style tag including theCSS on the Web', () => {
    const css = `body { color: red; }`
    expect(render(<Style>{css}</Style>).container).toEqual(render(<style>{css}</style>).container)
  })
})
