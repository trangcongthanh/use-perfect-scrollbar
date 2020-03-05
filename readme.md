# usePerfectScrollbar

This hook allow to use [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar) in React

Heavily inspired by [react-perfect-scrollbar](https://github.com/goldenyz/react-perfect-scrollbar)

## Install

`yarn add use-perfect-scrollbar perfect-scrollbar`

## Example
```js
import React from 'react'
import { usePerfectScrollbar } from 'use-perfect-scrollbar'

export const Component = () => {
  const ref = React.useRef(null)

  usePerfectScrollbar({ ref })

  return (
    <div ref={ref} style={{ position: 'relative' }}> // container must have a `position` style
      ... rest of component
    </div>
  )
}
```

## Options
| Option | Required | Description |
| ------ | -------- | ----------- |
| ref    | Yes      | ref of container | 
| onScrollY | No | Invoked when the y-axis is scrolled in either direction. |
| onScrollX | No | Invoked when the x-axis is scrolled in either direction. |
| onScrollUp | No | Invoked when scrolling upwards. |
| onScrollDown | No | Invoked when scrolling downwards. |
| onScrollLeft | No | Invoked when scrolling to the left. |
| onScrollRight | No | Invoked when scrolling to the right. |
| onYReachStart | No | Invoked when scrolling reaches the start of the y-axis. |
| onYReachEnd | No | Invoked when scrolling reaches the end of the y-axis (useful for infinite scroll). |
| onXReachStart | No | Invoked when scrolling reaches the start of the x-axis. |
| onXReachEnd | No | Invoked when scrolling reaches the end of the x-axis. |
| onUpdate | No | Invoked when component needs to update the scrollbar container by invoking ps.update(). For more detail, please refer to [issue#87](https://github.com/goldenyz/react-perfect-scrollbar/issues/87). |
| options | No | All perfect-scrollbar's [options](https://github.com/mdbootstrap/perfect-scrollbar#options) |

## FAQs
1. I wanna manual update perfect-scrollbar
The hook will return current instance of perfect-scrollbar. You can manually call `ps.update()` anywhere.

