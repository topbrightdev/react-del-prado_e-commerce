# react-router-scroll for React-router-dom v4

[React Router](https://github.com/reactjs/react-router) scroll management.

react-router-scroll is a React Router component that adds scroll management using [scroll-behavior](https://github.com/taion/scroll-behavior). By default, the component adds browser-style scroll behavior, but you can customize it to scroll however you want on route transitions.

This is a fork of the original React Router scroll made to support Reat Router v4. Currently all the original features should be working but it is still in early development, tests have not been completely updated yet and there are probably bugs to be encountered. Do not hesitate to signal them, or fix them through pull requests.

## Usage

```js
import { BrowserRouter } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

/* ... */

ReactDOM.render(
  <BrowserRouter>
    <ScrollContext>
      <MyApp />
    </ ScrollContext>
  </ BrowserRouter>,
  container
);
```

## Guide

### Installation

```shell
$ yarn add react-router-scroll-4
```

### Basic usage

Use the `ScrollContext` wrapper as in the example above. `ScrollContext` Should always have only one child, same as all the `Router` components.

You can override [scroll-behavior] by sending custom costructor through the property `scrollBehavior` to `ScrollContext`:

```js
<ScrollContext scrollBehavior={newScrollBehavior}>
  <MyApp />
</ ScrollContext>
```

### Custom scroll behavior

You can provide a custom `shouldUpdateScroll` as a property of `ScrollContext`. This function is called with the previous and the current router props. Those properties correspond to those accessible through [withRouter](https://reacttraining.com/react-router/web/api/withRouter).

The function can return:

- a falsy value to suppress updating the scroll position
- a position array of `x` and `y`, such as `[0, 100]`, to scroll to that position
- a truthy value to emulate the browser default scroll behavior

```js
shouldUpdateScroll = (prevRouterProps, { location, history }) => (
  prevRouterProps && location.pathname !== prevRouterProps.location.pathname
);

shouldUpdateScroll = (prevRouterProps, { location, history }) => {
  if (history.action === 'POP') {
    return false;
  }

  if (location.state["MY-USER-KEY"] === "NoScroll") {
    return [0, 0];
  }

  return true;
};
```

### Scrolling elements other than `window`

Use `<ScrollContainer>` in components rendered by a `ScrollContext` to manage the scroll behavior of elements other than `window`. Each `<ScrollContainer>` must be given a unique `scrollKey`, and can be given an optional `shouldUpdateScroll` callback that behaves as above. `ScrollContainer` should have exactly one child, which will be the node managed.

```js
import { ScrollContainer } from 'react-router-scroll';

function Page() {
  /* ... */

  return (
    <ScrollContainer
      scrollKey={scrollKey}
      shouldUpdateScroll={shouldUpdateScroll}
    >
      <MyScrollableComponent />
    </ScrollContainer>
  );
}
```

`<ScrollContainer>` does not support on-the-fly changes to `scrollKey` or to the DOM node for its child.

### Notes

#### Server side rendering

Both `<ScrollContainer>`  and `<ScrollContext>` are fine to use in server side rendering context. They just renturn their child without changing them in any way.
