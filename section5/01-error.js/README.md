# ⚠️ Error Handling in Next.js

## 📌 What is Error Handling?

Error handling is the process of detecting and managing errors that occur while an application is running.

Errors can happen for several reasons:

- A function throws an error.
- An API request fails.
- Data fetching fails.
- A component encounters an unexpected condition.
- A database or external service becomes unavailable.

Instead of allowing the application to crash without explanation, we can handle these errors and show a meaningful UI to the user.

In Next.js App Router, we can use the special `error.js` file to handle errors in a route segment.

---

## 1. 💥 How Do Errors Occur?

In JavaScript, we can manually throw an error using `throw new Error()`.

**Example:**

```js
export default function Home() {
  throw new Error("Something went wrong!");

  return <h1>Home Page</h1>;
}
```

### What happens here?

- `throw new Error()` creates and throws an error.
- JavaScript stops executing the current function.
- The component cannot render normally.
- Next.js catches the rendering error and looks for an appropriate error boundary.

Since the error is thrown before the return statement, the Home Page UI will not render.

---

## 2. 🛠️ Errors in Development Mode vs Production Mode

Next.js handles errors differently depending on the environment.

### Development Mode

When an error occurs while running:

```bash
npm run dev
```

Next.js displays detailed error information.

This can include:

- Error message.
- Stack trace.
- Source code location.
- Component information.
- Error overlay in the browser.

This information helps developers identify and debug the problem.

### Production Mode

When running:

```bash
npm run build
npm run start
```

Next.js hides sensitive error details from users.

Instead of exposing the full stack trace or internal error information, it displays a generic error message.

This is important because exposing internal errors can reveal implementation details that should remain private.

---

## 3. 📄 What is error.js?

`error.js` is a special file in the Next.js App Router.

It automatically creates an **Error Boundary** for its route segment.

An Error Boundary catches errors that occur while rendering its child components and displays a fallback UI instead of allowing the affected route segment to crash completely.

**Example folder structure:**

```text
app/
├── layout.jsx
├── page.jsx
└── error.js
```

When an error occurs in the page or its descendant components, Next.js can display the UI defined inside `error.js`.

---

## 4. 🧩 Creating an error.js File

Let's create an `error.js` file inside the `app` directory.

**Example: `app/error.js`**

```jsx
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Something went wrong!</h1>

      <p>{error.message}</p>

      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```

### Understanding the code

**1. `"use client"`**

`error.js` must be a Client Component because it uses client-side error boundary functionality.

**2. `error`**

Next.js provides the error object as a prop.

We can access:

```js
error.message;
```

It contains the error message available to the client.

In production, the original server error message may be hidden and replaced with a generic message. The error object can also contain a `digest` that helps identify the error in server logs.

**3. `reset`**

`reset` is a function provided by Next.js.

When called, it attempts to re-render the affected route segment.

```jsx
<button onClick={() => reset()}>Try Again</button>
```

This is useful when an error might be temporary, such as a failed data request.

---

## 5. 🔄 How Does error.js Work?

Consider this folder structure:

```text
app/
├── layout.jsx
├── page.jsx
├── error.js
│
└── movies/
    ├── page.jsx
    └── error.js
```

Here, we have two error boundaries:

- `app/error.js` handles errors in the root route segment's children.
- `app/movies/error.js` handles errors inside the movies route segment.

The nearest applicable error boundary handles the error.

### Execution Flow

```text
       User Opens Page
              |
              v
       Component Renders
              |
              v
        Error Occurs?
          /       \
        No         Yes
        |           |
        v           v
   Show Page    Find Nearest
                  error.js
                     |
                     v
                Show Fallback
                     |
                     v
              User Clicks Retry
                     |
                     v
                  reset()
                     |
                     v
              Re-render Segment
```

This allows us to handle errors at different levels instead of creating one error UI for the entire application.

---

## 6. ⚠️ Important Things to Remember

### A. error.js must be a Client Component

Always add:

```jsx
"use client";
```

at the top of the file.

### B. error.js does not catch every type of error

It catches errors during rendering and related work handled by React and Next.js error boundaries.

However, it does not automatically catch every error in an application.

For example:

- Errors inside event handlers.
- Errors in unrelated asynchronous callbacks.
- Errors thrown inside a `try/catch` block that are already caught.
- Errors in the root layout or root template.

For errors in event handlers, use normal JavaScript `try/catch` handling.

### C. Root Layout Errors

The `error.js` file inside `app/` cannot catch errors thrown by the root `app/layout.js`, because that layout is outside its own error boundary.

For errors in the root layout, Next.js provides another special file:

```text
app/
├── layout.jsx
└── global-error.js
```

`global-error.js` handles errors that reach the root layout boundary. It must define its own `<html>` and `<body>` elements because it replaces the root layout when displayed.

### D. error.js vs not-found.js

These two files handle different situations.

| error.js                                   | not-found.js                        |
| ------------------------------------------ | ----------------------------------- |
| Handles unexpected errors                  | Handles missing resources or routes |
| Shows an error fallback UI                 | Shows a 404-style UI                |
| Can provide a retry button using `reset()` | Can show a page-not-found message   |

---

## 🧠 Final Understanding

- Errors can occur when JavaScript throws an error or when something unexpected happens during rendering.
- Development mode provides detailed error information to help developers debug.
- Production mode hides sensitive error details from users.
- `error.js` is a special Next.js file that creates an Error Boundary for a route segment.
- It must be a Client Component.
- Next.js provides the `error` object and `reset()` function as props.
- `reset()` attempts to render the affected route segment again.
- Nested `error.js` files allow us to handle errors at different route levels.
- `global-error.js` handles errors that reach the root layout boundary.

**The key idea:** `error.js` lets us replace a broken route segment with a fallback UI, keeping the rest of the application available instead of leaving users staring at a crashed page.
