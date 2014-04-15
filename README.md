# es5-fix
## Fixes for incomplete ECMAScript 5 implementations

Fix issues in early ECMAScript 5 implementations.

### Usage

Fixed function can be implemented to override native one, for that use `implement` module, e.g.:

```javascript
require('es5-fix/date/parse/implement');
```

Or you can use fixed version independently e.g.:

```javascript
var parse = require('es5-fix/date/parse);
```


### Implemented fixes:

#### Date.parse _(es5-fix/date/parse)_

There's probably no single implementation that provides perfectly compliant version of `Date.parse`, this version fixes that.

#### Object.defineProperty _(es5-fix/object/define-property)_

It addresses the issue where re-definition of non writable properly is rejected. Old versions of Webkit are vulnerable to that. See:
* http://code.google.com/p/chromium/issues/detail?id=72736
* https://bugs.webkit.org/show_bug.cgi?id=54289

Additionally it fallbacks to direct assign if `defineProperty` crashes with _defineProperty is not supported on DOM objects_ (happens in Safari 5.0)

#### Object.defineProperties _(es5-fix/object/define-properties)_

Makes sure that fix for `defineProperty` also applies to `defineProperties`

### Installation
#### npm

	$ npm install es5-fix

##### Browser

You can easily bundle _es5-fix_ for browser with any CJS bundler (no favorite? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/))

### Tests [![Build Status](https://travis-ci.org/medikoo/es5-fix.png)](https://travis-ci.org/medikoo/es5-fix)

	$ npm test
