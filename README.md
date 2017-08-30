# N2VW

An universal library for converting number to Vietnamese words.

## Installation

```
// Using npm:
$ npm install n2vw

// Using Yarn:
$ yarn add n2vw

// Using Bower:
$ bower install n2vw
```

### Node

```
var n2vw = require('n2vw');
```

### `<script>` tag

```
<script src="bower_components/n2vw/lib/n2vw.min.js"></script>
```

## Usage

```
var converter = new n2vw();

converter.getFullText(1234);
// => 'một nghìn, hai trăm ba mươi bốn'

converter.getFullText('99');
// => 'chín mươi chín'
```

## CLI

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
