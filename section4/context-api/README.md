# Context API in Next.js

## What is Context API?

Context API is a React feature that allows us to share data between multiple components without passing props manually through every level of the component tree.

It helps us avoid **Prop Drilling**.

For example, suppose we have a theme value that needs to be accessed by:

- Navbar
- Sidebar
- Dashboard
- Profile

Instead of passing the theme through every parent component, we can store it in Context and access it directly from the components that need it.

---

## Does Context API work differently in Next.js?

No. We use Context API almost exactly the same way as we do in React.js.

The main difference is **where we wrap our application with the Provider**.

### In React.js

Usually, we wrap the application inside the Provider in `App.jsx`.

```jsx
function App() {
  return (
    <MyProvider>
      <Navbar />
      <Dashboard />
    </MyProvider>
  );
}
```

### In Next.js

Since Next.js App Router uses `layout.jsx` instead of `App.jsx` as the root layout, we wrap our application inside the Provider through the layout.

```text
app/
├── layout.jsx
├── page.jsx
└── context/
    └── MyContext.jsx
```

---

## Step 1: Create a Context

We create a normal Context just like in React.

### context/MyContext.jsx

```jsx
"use client";

import { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}
```

### Why do we use `"use client"`?

Context providers use React features like:

- `useState()`
- `useContext()`
- Event handlers

These are client-side React features.

Therefore, the Provider must be a Client Component.

---

## Step 2: Wrap the Layout with the Provider

### app/layout.jsx

```jsx
import MyProvider from "./context/MyContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
```

We don't need to add `"use client"` to `layout.jsx`.

Why?

Because importing a Client Component into a Server Component does not automatically turn the Server Component into a Client Component.

The layout can remain a Server Component while rendering the Provider.

---

## Step 3: Access Context in Components

Now we can access the context from any Client Component inside the Provider.

### components/Navbar.jsx

```jsx
"use client";

import { useContext } from "react";
import { MyContext } from "@/app/context/MyContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <nav>
      <h1>Current Theme: {theme}</h1>

      <button onClick={() => setTheme("light")}>Change Theme</button>
    </nav>
  );
}
```

No need to pass `theme` or `setTheme` through props.

We simply access them using `useContext()`.

---

## How It Works

```text
layout.jsx (Server Component)
          |
          v
     MyProvider
    (Client Component)
          |
          v
       children
          |
     -------------
     |           |
   Navbar     Dashboard
  (Client)     (Client)
     |           |
     v           v
 useContext()  useContext()
     |           |
     v           v
 Access shared Context data
```

The Provider makes its value available to all descendant components within its tree.

---

## Why Do We Use children?

In the layout:

```jsx
<MyProvider>{children}</MyProvider>
```

`children` represents the content that the layout receives from Next.js.

For example, when a user visits the homepage, the homepage becomes the layout's `children`.

The Provider wraps that content, allowing its descendant Client Components to access the Context.

---

## Important: Server Components and Context API

One important limitation:

**Server Components cannot directly consume React Context using `useContext()`.**

For example, this is not allowed:

```jsx
// Server Component

import { useContext } from "react";

const value = useContext(MyContext);
```

Instead, use Context inside Client Components.

Server Components can still render Client Components that consume Context.

---

## React vs Next.js

| React.js                        | Next.js App Router                            |
| ------------------------------- | --------------------------------------------- |
| Create Context normally         | Create Context normally                       |
| Create Provider normally        | Create Provider normally                      |
| Wrap app in `App.jsx`           | Wrap app in `layout.jsx`                      |
| Use `useContext()`              | Use `useContext()` in Client Components       |
| No Server Component distinction | Server and Client Component boundaries matter |

---

## Things I Learned

- Context API works almost the same way in Next.js as in React.js.
- We create Context using `createContext()`.
- We create a Provider component to share the Context value.
- The Provider must be a Client Component when it uses client-side React features.
- We wrap the application with the Provider inside `layout.jsx`.
- We use `{children}` to render the application inside the Provider.
- We access shared values using `useContext()`.
- Server Components cannot directly consume React Context.
- Importing a Client Component into a Server Component does not automatically make the Server Component a Client Component.

---

## Final Understanding

Context API in Next.js works almost the same way as it does in React.js. We create a Context using `createContext()`, build a Provider component, and access its values using `useContext()`.

The main difference is that in Next.js App Router, we generally wrap our application with the Provider inside `layout.jsx` instead of `App.jsx`.

Since Context API relies on client-side React features, the Provider must be a Client Component. However, the root layout can remain a Server Component and render the Provider around its children.

This allows us to share state across multiple Client Components without unnecessary prop drilling while still taking advantage of Next.js Server Components.
