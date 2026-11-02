# 🔄 Redux Toolkit in Next.js

## 📌 What is Redux Toolkit?

Redux Toolkit (RTK) is the official recommended way to manage global state in Redux applications.

It allows us to store application data in a central location called the **Redux Store**, so multiple components can access and update the same data without passing props through every component.

In Next.js, Redux Toolkit works almost the same way as it does in React.js, but we need to handle the Server Component and Client Component boundaries.

---

## 1. 🏗️ Creating the Redux Store

The first step is to create a Redux store using `configureStore()` from Redux Toolkit.

The store is the central place where the application's global state is maintained.

**Example: `lib/store.js`**

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### What happens here?

- `configureStore()` creates the Redux store.
- `reducer` tells Redux which reducers should be included in the store.
- `counter` becomes the key through which we can access the counter slice's state.
- `counterReducer` handles updates to the counter state.

---

## 2. 🧩 Creating a Slice

A slice contains the initial state and the reducers responsible for updating that state.

We create slices using `createSlice()` from Redux Toolkit.

**Example: `lib/features/counterSlice.js`**

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

### What happens here?

- `name`: Identifies the slice.
- `initialState`: Defines the initial state.
- `reducers`: Contains functions that describe how the state should change.
- `actions`: Automatically generated action creators based on the reducer names.
- `reducer`: Exported so it can be registered in the Redux store.

Redux Toolkit uses **Immer** internally, allowing us to write state updates in a simpler way, such as `state.value += 1`, while preserving Redux's immutable update behavior.

---

## 3. 🌐 Creating the Store Provider

In a normal React application, we usually wrap the main application component with Redux's `Provider`.

In Next.js App Router, we create a separate Client Component to provide the Redux store to the application.

**Example: `app/StoreProvider.jsx`**

```jsx
"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```

### What happens here?

- `"use client"` makes this a Client Component.
- `Provider` is imported from `react-redux`.
- The `store` is passed to the Provider through its `store` prop.
- `children` represents the components nested inside `StoreProvider`.
- The Provider makes the Redux store available to its descendant Client Components.

**Why do we need a separate StoreProvider file?**

The Redux Provider uses React Context internally. Since it belongs to the client-side React environment, we place it inside a Client Component rather than converting the entire root layout into a Client Component.

---

## 4. 📦 Wrapping the Layout with StoreProvider

Now we import `StoreProvider` into the root `layout.jsx` and wrap the application with it.

**Example: `app/layout.jsx`**

```jsx
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

### What happens here?

- The root layout is a Server Component by default.
- We import the Client Component `StoreProvider`.
- The entire application is passed as `children`.
- The Redux Provider makes the store available to Client Components rendered inside it.

**Important:** Importing a Client Component into a Server Component does not automatically turn the Server Component into a Client Component.

This allows us to keep the root layout as a Server Component while still providing Redux globally.

---

## 5. 🎯 Accessing Redux State with useSelector

To access data from the Redux store, we use the `useSelector()` hook from `react-redux`.

**Example: `app/components/Counter.jsx`**

```jsx
"use client";

import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  return <h1>Count: {count}</h1>;
}
```

### What happens here?

- `useSelector()` receives the Redux state.
- We access the counter slice through `state.counter`.
- `value` contains the current counter value.
- Whenever the selected state changes, the component re-renders with the updated value.

---

## 6. ⚡ Updating Redux State with useDispatch

To update the Redux state, we use `useDispatch()` and dispatch an action generated by our slice.

**Example: `app/components/Counter.jsx`**

```jsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/lib/features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
```

### What happens here?

- `useDispatch()` gives us access to the dispatch function.
- `dispatch(increment())` sends the increment action to Redux.
- The corresponding reducer updates the state.
- `useSelector()` detects the updated value.
- The component re-renders with the new state.

---

## 7. ⚠️ Important: Client Components and Redux Hooks

In Next.js App Router, components are Server Components by default.

However, Redux hooks such as:

- `useSelector()`
- `useDispatch()`

must be used inside Client Components.

Therefore, whenever a component needs to access or update Redux state using these hooks, we must add:

```jsx
"use client";
```

at the top of that component.

**Remember:**

- A component that uses Redux hooks must be a Client Component.
- A component that does not need client-side interactivity can remain a Server Component.
- We do not need to convert the entire application into Client Components just because we use Redux Toolkit.

---

## 🔄 Complete Redux Flow in Next.js

```text
       Redux Toolkit
             |
             v
       Create Slices
             |
             v
        Create Store
             |
             v
       StoreProvider
       ("use client")
             |
             v
       React-Redux
         Provider
             |
             v
       Root layout.jsx
       (Server Component)
             |
             v
        Application
             |
             v
       Client Component
             |
       +-----+------+
       |            |
       v            v
  useSelector   useDispatch
       |            |
       v            v
  Read State    Dispatch Action
       |            |
       |            v
       |        Slice Reducer
       |            |
       |            v
       +------ Updated State
                    |
                    v
               Re-render
```

---

## 🆚 Redux Toolkit in React vs Next.js

| React.js                            | Next.js App Router                   |
| ----------------------------------- | ------------------------------------ |
| Create a Redux store                | Create a Redux store                 |
| Create slices                       | Create slices                        |
| Import Provider                     | Import Provider                      |
| Wrap the main application component | Wrap the root layout's children      |
| Use Redux hooks in components       | Use Redux hooks in Client Components |

The Redux Toolkit logic remains almost identical. The main difference is how we integrate the Provider with Next.js App Router and its Server/Client Component architecture.

---

## ⚠️ Additional Consideration

For real Next.js applications, especially those using Server Components, avoid treating a single module-level Redux store as a universal server-side store for every request.

A common recommended pattern is to create a store through a `makeStore()` function and create a store instance inside the StoreProvider. This helps avoid sharing state between different server requests.

For learning the basic integration, the simple store setup shown above demonstrates the core concept.

---

## 🧠 Final Understanding

Redux Toolkit in Next.js works similarly to Redux Toolkit in React.js.

The main setup involves:

1. Create a Redux store using `configureStore()`.
2. Create slices using `createSlice()`.
3. Create a `StoreProvider` Client Component.
4. Import `Provider` from `react-redux` and pass the store to it.
5. Wrap the root layout's `children` with `StoreProvider`.
6. Use `useSelector()` to access Redux state.
7. Use `useDispatch()` to dispatch actions and update Redux state.
8. Add `"use client"` to components that use Redux hooks.

**The key difference:** In Next.js App Router, we use a separate Client Component for the Redux Provider and integrate it into the root layout, while keeping the layout itself as a Server Component.
