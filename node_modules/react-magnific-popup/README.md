# React Magnific Popup
A simple react wrapper for the popular jquery plugin `magnific popup`

## Usage
You need include jquery.js and the magnific-popup.js plugin in the header of your index.html file of your react application.

## Demo & Examples
Live demo and code examples can be found in the link below.
[bodunadebiyi.github.io/react-magnific-popup](http://bodunadebiyi.github.io/react-magnific-popup/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-magnific-popup is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-magnific-popup.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-magnific-popup --save
```

### Properties
Look at the code examples to see the props each component has, you can also deduce other available props by looking at the original [magnific popup documentation](http://dimsemenov.com/plugins/magnific-popup/documentation.html).

### Public methods
To have access to the public methods import the MagnificPop package and use as follows:
```js
import { MagnificPopup } from 'react-magnific-popup'

const SampleComponent = () => {
    MaginificPopup.trigger('.element-with-popup', 'open');
    MaginificPopup.trigger('.element-with-popup', 'close');
    MaginificPopup.trigger('.element-with-popup', 'goto', 3);
}
```
Check official [magnific popup documentation](http://dimsemenov.com/plugins/magnific-popup/documentation.html) for more available public methods.

### Public properties
To have access to the public properties import the MagnificPop package and use as follows:

```js
import { MagnificPopup } from 'react-magnific-popup'

const SampleComponent = () => {
    MaginificPopup.props.item;
    MaginificPopup.props.currItem;
    MaginificPopup.props.index;
    MaginificPopup.props.content;
    MaginificPopup.props.bgOverlay;
    MaginificPopup.props.wrap;
    MaginificPopup.props.contentContainer;
    MaginificPopup.props.st;
    MaginificPopup.props.isIE7;
    MaginificPopup.props.isIOS;
}
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

Copyright (c) 2017 Adebiyi Bodunde.

