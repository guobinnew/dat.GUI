# dat.GUI
A lightweight graphical user interface for changing variables in JavaScript. 

Get started with dat.GUI by reading the [tutorial](http://workshop.chromeexperiments.com/examples/gui)
or the [API documentation](API.md).



## Packaged Builds
The easiest way to use dat.GUI in your code is by using the built source at `build/dat.gui.min.js`. These built JavaScript files bundle all the necessary dependencies to run dat.GUI.

In your `head` tag, include the following code:
```html
<script type="text/javascript" src="dat.gui.min.js"></script>
```

## Installing from npm

```bash
$ npm install --save dat.gui
```

```js
// CommonJS:
const dat = require('dat.gui');

// ES6:
import * as dat from 'dat.gui';

const gui = new dat.GUI();
```

## Usage
Language (en | zh), default is zh

```js
gui.setLocale('zh')
```

Property Title

```js
var Options = function() {
  this.message = 'dat.gui';
  this.speed = 0.8;
};

// old 
gui.add(text, 'message');
gui.add(text, 'speed', -5, 5);

// new
gui.add(text, {key:'message', title:'消息');
gui.add(text, {key:'speed', title:'速度'}, -5, 5);

```

## Directory Contents

```
├── build - Compiled source code.
├── src - Source files.
└── tests - Tests.
```

## Building your own dat.GUI

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

## npm scripts

- npm run build - Build development and production version of scripts.
- npm run dev - Build development version of script and watch for changes.


## Working with Content Security Policy
If you're using a server with a Content Security Policy in place that blocks 'unsafe-inline', you will have problems when dat.gui.js tries to inject style information. To get around this, load 'build/dat.gui.css' as an external style sheet.

## Changes
View the [Change Log](CHANGELOG.md)

## Thanks
The following libraries / open-source projects were used in the development of dat.GUI:
 * [Rollup](https://rollupjs.org)
 * [Sass](http://sass-lang.com/)
 * [Node.js](http://nodejs.org/)
 * [QUnit](https://github.com/jquery/qunit) / [jquery](http://jquery.com/)
