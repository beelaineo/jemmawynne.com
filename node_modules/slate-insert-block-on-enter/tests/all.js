import InsertBlockOnEnterPlugin from '../dist'
import assert from 'assert'
import fs from 'fs'
import path from 'path'
import {Value} from 'slate'
import readMetadata from 'read-metadata'

/**
 * Strip all of the dynamic properties from a `json` object.
 *
 * @param {Object} json
 * @return {Object}
 */

function strip(json) {
    const { key, ...props } = json

    if (props.nodes) {
        props.nodes = props.nodes.map(strip)
    }

    return props
}

describe('slate-insert-block-on-enter', () => {
    const tests = fs.readdirSync(__dirname)
    const plugin = InsertBlockOnEnterPlugin('paragraph')

    tests.forEach(test => {
        if (test[0] === '.' || path.extname(test).length > 0) return

        it(test, () => {
            const dir = path.resolve(__dirname, test)
            const input = readMetadata.sync(path.resolve(dir, 'input.yaml'))
            const expected = readMetadata.sync(path.resolve(dir, 'output.yaml'))
            const fn = require(path.resolve(dir)).default

            const value = Value.fromJSON({document: input})
            const expectedValue = Value.fromJSON({document: expected})
            const change = fn(plugin, value)
            const output = change.value.toJSON()
            assert.deepEqual(output, expectedValue.toJSON())
        })
    })
})
