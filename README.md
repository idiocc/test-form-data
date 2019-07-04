# @multipart/test-form-data

[![npm version](https://badge.fury.io/js/%40multipart%2Ftest-form-data.svg)](https://npmjs.org/package/@multipart/test-form-data)

`@multipart/test-form-data` is Data For Testing Multipart/Form-Data Algorithms.

```sh
yarn add @multipart/test-form-data
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`updateStore(store: Object)`](#updatestorestore-object-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its named function, and by referencing the mask result file:

```js
import makeTestSuite from '@zoroaster/mask'
import { updateStore } from '@multipart/test-form-data'

export default makeTestSuite('node_modules/@multipart/test-form-data', {
  getResults() {
    // ... must return the store for comparison
  }
})
```

%EXAMPLE default.md%

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `updateStore(`<br/>&nbsp;&nbsp;`store: Object,`<br/>`): void`

Updates the store to make `undefined` in sparse arrays appear as nulls for `deepStrictEqual` comparison.

```js
import { updateStore } from '@multipart/test-form-data'

const hello = []
hello[2] = 'test'

const store = { hello }
updateStore(store)
console.log(store)
```
```
{ hello: [ null, null, 'test' ] }
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original data by [Linus Unnebäck](https://github.com/LinusU/testdata-w3c-json-form).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>