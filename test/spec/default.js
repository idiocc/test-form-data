import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import testFormData from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof testFormData, 'function')
  },
  async 'calls package without error'() {
    await testFormData()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await testFormData({
      text,
    })
    ok(res, text)
  },
}

export default T