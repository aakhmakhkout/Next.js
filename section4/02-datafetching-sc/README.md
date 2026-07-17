# Data Fetching in Server Components

## What is Server-side Data Fetching?

Server-side data fetching means the data is fetched on the **Next.js server** before the page is sent to the browser.

Unlike Client Components, we don't use `useState()` or `useEffect()`.

We simply make the component asynchronous and fetch the data directly.

---

## Basic Structure

```jsx
export default async function Posts() {
  const response = await fetch("API_URL");
  const posts = await response.json();

  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
```

---

## Rendering Flow

```
User

↓

Browser requests page

↓

Next.js Server

↓

Server Component executes

↓

Fetch Data

↓

Generate HTML with Data

↓

Send HTML to Browser

↓

Browser displays page
```

Unlike Client Components, the browser receives the page **with the data already included**.

---

## Client vs Server Data Fetching

### Client Component

```
Browser

↓

Hydration

↓

useEffect()

↓

Fetch API

↓

setState()

↓

React Re-renders

↓

Display Data
```

The browser performs the API request after the page loads.

---

### Server Component

```
Browser requests page

↓

Next.js Server

↓

Fetch API

↓

Generate HTML

↓

Browser receives completed page
```

The server performs the API request before the page reaches the browser.

---

## Biggest Difference

### Client Components

- Uses `"use client"`
- Uses `useState()`
- Uses `useEffect()`
- Browser fetches the data
- UI updates after fetching

---

### Server Components

- No `"use client"`
- No `useState()`
- No `useEffect()`
- Server fetches the data
- HTML already contains the fetched data

---

## Next.js Extended fetch()

One thing I learned is that Next.js doesn't replace JavaScript's `fetch()`, but it **extends** it.

The syntax is exactly the same.

```jsx
const response = await fetch(url);
```

However, Next.js adds extra features on top of the native `fetch()`.

Some useful features are

- Caching
- Revalidation
- Cache Control
- Request Deduplication

---

## Cache

By default, Next.js may cache fetched data.

This improves performance because the same data doesn't need to be fetched repeatedly.

---

## Fresh Data

Sometimes we don't want cached data.

We want the latest data from the API every time.

Next.js allows us to control this using options like

```jsx
await fetch(url, {
  cache: "no-store",
});
```

This tells Next.js to always fetch fresh data.

---

## Revalidation

Sometimes fetching fresh data on every request is unnecessary.

Instead, we can tell Next.js to reuse cached data for a certain amount of time and then automatically fetch new data.

Example

```jsx
await fetch(url, {
  next: {
    revalidate: 60,
  },
});
```

This means

- Cache the data
- Keep it for 60 seconds
- After 60 seconds, fetch fresh data from the API

This provides a balance between performance and freshness.

---

## My Understanding

At first I thought the main topic was simply using `async` and `await`.

But the actual important part is **where the fetching happens**.

Client Components fetch data **after** the page loads in the browser.

Server Components fetch data **before** the page is sent to the browser.

Another important thing I learned is that Next.js extends the native JavaScript `fetch()` by adding features like caching and revalidation, allowing us to decide whether data should be reused from the cache or fetched fresh from the API.

---

## Final Understanding

Server-side data fetching in Next.js is much simpler than client-side data fetching because we don't need `useState()` or `useEffect()`. We simply make the Server Component asynchronous, fetch the data using `await`, and render it directly. The browser receives HTML that already contains the fetched data. Next.js also enhances the native `fetch()` API with powerful features like caching, revalidation, cache control, and request deduplication, giving us control over when cached data should be reused and when fresh data should be fetched.
