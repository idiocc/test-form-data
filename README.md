# @multipart/test-form-data

[![npm version](https://badge.fury.io/js/%40multipart%2Ftest-form-data.svg)](https://npmjs.org/package/@multipart/test-form-data)

`@multipart/test-form-data` is Data For Testing Multipart/Form-Data Algorithms Written As [Zoroaster Mask](https://contexttesting.com).

```sh
yarn add -D @multipart/test-form-data
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

```markdown
## basic keys
[
  {
    "key": "name",
    "value": "Bender"
  },
  {
    "key": "hind",
    "value": "Bitable"
  },
  {
    "key": "shiny",
    "value": "Yes"
  }
]

/* expected */
{
  "name": "Bender",
  "hind": "Bitable",
  "shiny": "Yes"
}
/**/

## multiple values
[
  {
    "key": "bottle-on-wall",
    "value": "1"
  },
  {
    "key": "bottle-on-wall",
    "value": "2"
  },
  {
    "key": "bottle-on-wall",
    "value": "3"
  }
]

/* expected */
{
  "bottle-on-wall": [
    "1",
    "2",
    "3"
  ]
}
/**/

## deeper structure
[
  {
    "key": "pet[species]",
    "value": "Dahut"
  },
  {
    "key": "pet[name]",
    "value": "Hypatia"
  },
  {
    "key": "kids[1]",
    "value": "Thelma"
  },
  {
    "key": "kids[0]",
    "value": "Ashley"
  }
]

/* expected */
{
  "pet": {
    "species": "Dahut",
    "name": "Hypatia"
  },
  "kids": [
    "Ashley",
    "Thelma"
  ]
}
/**/

## sparse arrays
[
  {
    "key": "heartbeat[0]",
    "value": "thunk"
  },
  {
    "key": "heartbeat[2]",
    "value": "thunk"
  }
]

/* expected */
{
  "heartbeat": [
    "thunk",
    null,
    "thunk"
  ]
}
/**/

## even deeper
[
  {
    "key": "pet[0][species]",
    "value": "Dahut"
  },
  {
    "key": "pet[0][name]",
    "value": "Hypatia"
  },
  {
    "key": "pet[1][species]",
    "value": "Felis Stultus"
  },
  {
    "key": "pet[1][name]",
    "value": "Billie"
  }
]

/* expected */
{
  "pet": [
    {
      "species": "Dahut",
      "name": "Hypatia"
    },
    {
      "species": "Felis Stultus",
      "name": "Billie"
    }
  ]
}
/**/

## such deep
[
  {
    "key": "wow[such][deep][3][much][power][!]",
    "value": "Amaze"
  }
]

/* expected */
{
  "wow": {
    "such": {
      "deep": [
        null,
        null,
        null,
        {
          "much": {
            "power": {
              "!": "Amaze"
            }
          }
        }
      ]
    }
  }
}
/**/

## merge behaviour
[
  {
    "key": "mix",
    "value": "scalar"
  },
  {
    "key": "mix[0]",
    "value": "array 1"
  },
  {
    "key": "mix[2]",
    "value": "array 2"
  },
  {
    "key": "mix[key]",
    "value": "key key"
  },
  {
    "key": "mix[car]",
    "value": "car key"
  }
]

/* expected */
{
  "mix": {
    "0": "array 1",
    "2": "array 2",
    "": "scalar",
    "key": "key key",
    "car": "car key"
  }
}
/**/

## bad fields
[
  {
    "key": "error[good]",
    "value": "BOOM!"
  },
  {
    "key": "error[bad",
    "value": "BOOM BOOM!"
  }
]

/* expected */
{
  "error": {
    "good": "BOOM!"
  },
  "error[bad": "BOOM BOOM!"
}
/**/
```

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