🐻 Zustand: React State Management Made Simple

Zustand is a tiny but powerful state management library for React. It solves the problem of prop drilling and unnecessary re-renders you often face with Context API or Redux.

1. ⚡ Why Zustand instead of Redux or Context?

Tiny: ~1KB gzipped.

Simple API: No reducers, no actions, no boilerplate.

Fast: Uses subscriptions → avoids extra renders.

Scalable: Can manage global state for both small and large apps.

Async actions work out-of-the-box (no middleware like redux-thunk needed).

Persistence, logging, and devtools with middlewares.

Composable: We can create slices (modular stores).
