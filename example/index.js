/* alanode example/ */
import testFormData from '../src'

(async () => {
  const res = await testFormData({
    text: 'example',
  })
  console.log(res)
})()