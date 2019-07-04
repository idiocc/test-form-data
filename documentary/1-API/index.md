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

%~%

```## updateStore
[
  ["store", "Object"]
]
```

Updates the store to make `undefined` in sparse arrays appear as nulls for `deepStrictEqual` comparison.

%EXAMPLE: example, ../src => @multipart/test-form-data%
%FORK example%

%~%