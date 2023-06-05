```sh
$ npx tsc -v
Version 5.1.3
```

Bug description: Exports removed when using `tsc.transpileModule`, `verbatimModuleSyntax: false` and export identifier overlaps with type.

## Input file:

```js
// exports.ts

import fooValue from "./values";
import type {Foo} from "./types";

const Foo: Foo = fooValue as any as Foo;

export {Foo};
```

## Project compile:

```sh
$ npm run compile

> compile
> tsc -p tsconfig.json
```

Result:

```js
// exports.js
import fooValue from "./values";
var Foo = fooValue;
export { Foo }; // export preserved
```

## transpileModule:

```sh
$ npm run transpile

> transpile
> node transpile.mjs
```

Result:

```js
// exports.transpile.js

import fooValue from "./values";
var Foo = fooValue;

// exports missing
```
