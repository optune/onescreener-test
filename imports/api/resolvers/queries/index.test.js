/* eslint-env mocha */

// Tests that collections exists

import { assert } from 'chai'

import { queries } from './index'

describe(__filename, function() {
  it('page', function() {
    assert.isFunction(queries.page)
  })
})
