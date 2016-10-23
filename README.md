# stateful-title

[![NPM version](https://img.shields.io/npm/v/stateful-title.svg?style=flat-square)](https://npmjs.com/package/stateful-title) [![NPM downloads](https://img.shields.io/npm/dm/stateful-title.svg?style=flat-square)](https://npmjs.com/package/stateful-title) [![Build Status](https://img.shields.io/circleci/project/egoist/stateful-title/master.svg?style=flat-square)](https://circleci.com/gh/egoist/stateful-title)

## Install

```bash
$ npm install --save stateful-title
```

## Usage

```js
const statefulTitle = require('stateful-title')

const title = statefulTitle('old title')

// set new title
title('new title')
// document.title => 'new title'

// reset to old title
title()
// document.title => 'old title'
```

## API

### statefulTitle(oldTitle, [set])

It returns a function which accepts a new title as the only parameter to set `document.title`. If no new title was specified it defaults to old title.

#### oldTitle

Type: `string`

Old document title.

#### set

Type: `boolean`  
Default: `false`

Set document.title to `oldTitle`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
