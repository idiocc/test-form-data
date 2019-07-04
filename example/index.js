import { updateStore } from '../src'

const hello = []
hello[2] = 'test'

const store = { hello }
updateStore(store)
console.log(store)