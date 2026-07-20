# Loading States using Suspense

## What is Suspense?

`<Suspense>` is a React feature that allows us to show a loading UI for **specific components** instead of the entire page.

In Next.js, Suspense is commonly used with Server Components that fetch data.

Instead of making the whole page wait, only the slow component waits.

---

## Why do we use Suspense?

Before learning Suspense, I learned about `loading.jsx`.

`loading.jsx` provides a loading UI for the **entire route segment**.

This means if one component is slow, the whole route waits.

Example

```
Posts Page

├── Header
├── Sidebar
├── Posts
└── Footer
```

If the Posts section takes 5 seconds to fetch data,

the user sees

```
Loading...
```

until the whole route is ready.

---

## Problem with loading.jsx

Suppose

```
Header

↓

Ready

Sidebar

↓

Ready

Posts

↓

5 seconds

Footer

↓

Ready
```

Even though Header, Sidebar and Footer are already ready,

the user still has to wait because the route is treated as one unit.

---

## Solution: Suspense

With Suspense, we divide the slow parts of the page into separate components.

Example

```
Posts Page

├── Header
├── Sidebar
├── LatestPosts
└── PopularPosts
```

Now we wrap only the slow components.

```jsx
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Header />

      <Sidebar />

      <Suspense fallback={<Loading />}>
        <LatestPosts />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PopularPosts />
      </Suspense>
    </>
  );
}
```

---

## Rendering Flow

```
User requests page

↓

Next.js starts rendering

↓

Header is ready

↓

Header appears

↓

Sidebar is ready

↓

Sidebar appears

↓

LatestPosts is fetching

↓

Show Loading...

↓

PopularPosts is fetching

↓

Show Loading...

↓

LatestPosts finishes

↓

LatestPosts appears

↓

PopularPosts finishes

↓

PopularPosts appears
```

Instead of waiting for everything,

each component appears as soon as it is ready.

---

## Component-based Loading

One thing I learned is that Suspense provides **component-based loading**.

Instead of making the whole page wait,

we divide our page into smaller components.

Those components can fetch their own data independently.

Then we wrap only those components with

```jsx
<Suspense>
```

This makes the page feel much faster because other parts of the page are already visible.

---

## Fallback

Suspense displays a fallback UI while waiting.

Example

```jsx
<Suspense fallback={<Loading />}>
  <Posts />
</Suspense>
```

While `Posts` is rendering,

the user sees

```
Loading...
```

Once rendering finishes,

the actual component replaces the fallback.

---

## loading.jsx vs Suspense

### loading.jsx

```
Whole Route

↓

Loading

↓

Whole Route Appears
```

Only after the entire route segment is ready does the page appear.

---

### Suspense

```
Header

↓

Visible

Sidebar

↓

Visible

Posts

↓

Loading...

↓

Visible

Reviews

↓

Loading...

↓

Visible
```

Each component can finish independently.

---

## My Initial Understanding

I thought

> We use Suspense because loading.jsx holds the whole page until rendering is completed.

---

## What I Understood

That is mostly correct.

A more accurate explanation is

`loading.jsx` provides loading UI for an **entire route segment**, while Suspense provides loading UI for **individual components or subtrees**.

This allows different parts of the page to render independently.

---

## Important Note

Suspense is **not specifically for API requests**.

It is used for asynchronous rendering.

Many Server Components fetch data, so Suspense is commonly used around them, but it can be used for any component that suspends while rendering.

---

## Things I Learned

- Suspense is a React feature.
- Next.js supports Suspense out of the box.
- Suspense provides component-level loading.
- `loading.jsx` provides route-level loading.
- Each Suspense boundary has its own fallback UI.
- Different components can finish rendering independently.
- Users can interact with the parts of the page that are already ready instead of waiting for the whole page.

---

## Final Understanding

`loading.jsx` and `<Suspense>` are both used to display loading UIs, but they work at different levels. `loading.jsx` handles loading for an entire route segment, while `<Suspense>` handles loading for individual components. By splitting a page into smaller components and wrapping only the slow ones with `<Suspense>`, Next.js can display the rest of the page immediately while showing a fallback UI only where it's needed. This results in a faster and smoother user experience.
