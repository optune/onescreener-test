/* eslint-env mocha */

// Tests that collections exists

import { assert } from 'chai'

import { Random } from 'meteor/random'

import { Genres, Pages } from './index'

const userId = Random.id()

describe(__filename, function() {
  it('Pages', function() {
    assert.isFunction(Pages.find)

    const id = Pages.insert({ title: 'Page Title', text: 'Test Text', userId })
    assert.ok(id)
  })
  it('Genres', function() {
    assert.isFunction(Genres.find)

    const id = Genres.insert({ name: 'Rock' })
    assert.ok(id)
  })
})
