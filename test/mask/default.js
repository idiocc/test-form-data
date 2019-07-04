import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import testFormData from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await testFormData({
      text: this.input,
    })
    return res
  },
  context: Context,
})