# 🔄 Recovering from Errors in Next.js

## 📌 What is Error Recovery?

Sometimes errors occur unpredictably.

For example:

- An API request may fail temporarily.
- A server may respond slowly or become unavailable.
- A component may throw an error randomly.
- A network request may succeed on one attempt and fail on another.

These errors are not always permanent. Sometimes refreshing or retrying the affected part of the application is enough to recover.

Next.js provides different ways to recover from errors, mainly:

1. `reset()`
2. `router.refresh()`

---

## 1. 💥 Understanding Unpredictable Errors

Let's create an example where an error occurs randomly.

**Example: `app/page.jsx`**

```jsx
export default function Home() {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    throw new Error("Random error occurred!");
  }

  return <h1>Home Page Loaded Successfully!</h1>;
}
```

### What happens here?

- `Math.random()` generates a random number between 0 and 1.
- If the number is greater than `0.5`, an error is thrown.
- Otherwise, the component renders normally.

This means:

- Sometimes the page loads successfully.
- Sometimes the page throws an error.

This is useful for understanding how error recovery works because the error is unpredictable.

---

## 2. 🔁 Recovering Using reset()

The `reset()` function is provided by Next.js through the `error.js` component.

It attempts to re-render the affected route segment.

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

### How does reset() work?

Suppose the first render generates `0.8`.

```text
Page Renders
     |
     v
Math.random() = 0.8
     |
     v
0.8 > 0.5
     |
     v
Error Thrown
     |
     v
error.js Displayed
     |
     v
User Clicks Try Again
     |
     v
reset()
     |
     v
Affected Segment Re-renders
     |
     v
Math.random() Runs Again
     |
     v
New Random Number
     |
   /   \
  v     v
0.3    0.9
 |      |
 v      v
Success Error Again
```

If the new random number is `0.3`, the page loads successfully.

If it is `0.9`, another error occurs.

**Important:** `reset()` does not guarantee that the error will disappear. It simply gives the affected route segment another chance to render.

---

## 3. 🔃 Recovering Using router.refresh()

Another way to recover from errors is by using `router.refresh()` from Next.js.

We import `useRouter()` from `next/navigation`.

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return <button onClick={() => router.refresh()}>Refresh Page</button>;
}
```

### What does router.refresh() do?

`router.refresh()` requests a fresh Server Component payload for the current route.

It:

- Re-renders Server Components for the current route on the server.
- Requests a new React Server Component (RSC) payload.
- Merges the updated result into the current UI.
- Preserves unaffected client-side React state and browser state where possible.

It does not necessarily clear the server-side cache. If cached data is causing the problem, you may need to revalidate that cache separately.

### Example

Suppose a Server Component fetches data from an API and the request fails.

After showing an error fallback, you can provide a refresh button that calls `router.refresh()` to request a fresh server render.

---

## 4. 🆚 reset() vs router.refresh()

Both can help recover from errors, but they work differently.

| reset()                                                              | router.refresh()                                                |
| -------------------------------------------------------------------- | --------------------------------------------------------------- |
| Provided by Next.js through `error.js`                               | Provided by `useRouter()`                                       |
| Resets the affected error boundary and retries rendering its segment | Requests a fresh Server Component payload for the current route |
| Commonly used in error fallback UI                                   | Can be used in any Client Component                             |
| Does not guarantee recovery                                          | Does not guarantee recovery                                     |
| Does not necessarily clear cached data                               | Does not necessarily clear cached data                          |

### Which one should we use?

**Use `reset()` when:**

- An error boundary has caught a rendering error.
- You want to retry rendering the affected route segment.
- You are implementing a Try Again button inside `error.js`.

**Use `router.refresh()` when:**

- You want to refresh the current route's Server Component data.
- You want to request a new server render from a Client Component.
- You need to refresh server-rendered content after an action.

---

## 5. ⚠️ Important: Refreshing Does Not Always Fix Errors

Consider this example:

```jsx
export default function Home() {
  throw new Error("Permanent error!");

  return <h1>Home Page</h1>;
}
```

No matter how many times we call `reset()` or refresh the route, the same error will occur because the code always throws an error.

Recovery works when the underlying condition can change, such as:

- A temporary network failure.
- An intermittent API error.
- A randomly occurring error.
- A temporary server issue.

If the error is caused by a permanent coding mistake, we must fix the code itself.

---

## 🧠 Final Understanding

- Unexpected errors can occur sometimes but not always.
- `reset()` retries rendering the affected route segment after an error boundary catches an error.
- `router.refresh()` requests a fresh Server Component payload for the current route.
- Both can help recover from temporary errors, but neither guarantees success.
- `reset()` is especially useful inside `error.js`.
- `router.refresh()` is useful when we want to refresh server-rendered content from a Client Component.
- Refreshing does not automatically clear every cache.
- Permanent errors require fixing the underlying problem.

**The key idea:** Error recovery means giving the application another chance to work when a temporary problem occurs. `reset()` retries an error boundary, while `router.refresh()` requests fresh server-rendered content.
