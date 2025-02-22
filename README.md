# React useEffect setInterval Bug

This repository demonstrates a common bug related to the usage of `setInterval` within the `useEffect` hook in React.  The bug involves improper handling of the interval within the cleanup function leading to unexpected behavior or memory leaks.

## Bug Description

The provided `MyComponent` uses `setInterval` to update a counter every second. However, the interval is not correctly managed, resulting in a potential memory leak as the component unmounts.

## Solution

The solution addresses this by correctly incorporating the `setInterval` function and clearing it appropriately using the return function from `useEffect`.

## How to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe the counter's behavior.  The original bug will not clean up the interval properly. The solution demonstrates the correct way.