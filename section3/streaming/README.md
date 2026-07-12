# Next.js - Streaming

## What is Streaming?

Streaming is a rendering technique in Next.js that allows the server to send the **ready parts** of a page to the browser immediately, without waiting for the entire page to finish rendering.

It is mainly used when some sections of the page contain asynchronous data (API calls, database queries, etc.).

---

## Why do we need it?

Suppose a page has

```
Navbar
Hero Section
Trending Movies (5 sec API)
Footer
```

Without Streaming

```
Request

↓

Wait 5 sec

↓

Render Everything

↓

Browser
```

The whole page stays blank until the API finishes.

With Streaming

```
Request

↓

Navbar Ready ✅

↓

Hero Ready ✅

↓

Trending Loading...

↓

Footer Ready ✅

↓

Browser
```

Now the user can already use the page while the slow section is still loading.

---

## How do we use Streaming?

Streaming is achieved using React's

```jsx
<Suspense>
```

Example

```jsx
<Suspense fallback={<Loading />}>
  <TrendingMovies />
</Suspense>
```

While `TrendingMovies` is fetching data,

```jsx
<Loading />
```

is shown.

As soon as the promise resolves,

Loading is automatically replaced with the real component.

---

## My Biggest Confusion

I thought

> Suspense itself is Streaming.

Not exactly.

- **Streaming** = Sending completed parts of the page early.
- **Suspense** = The component that creates the loading boundary and makes Streaming possible.

Think of Suspense as the **tool**, and Streaming as the **result**.

---

## React vs Next.js

### React (Vite)

Everything happens inside browser.

```
Download JS

↓

Run React

↓

Fetch API

↓

Render
```

React cannot stream HTML from the server because there is no server rendering.

---

### Next.js

```
Request

↓

Server starts rendering

↓

Ready parts

↓

Send immediately

↓

Slow parts

↓

Send later
```

This is Streaming.

---

## Why don't we normally use this in React?

React also has

```jsx
<Suspense>
```

but it was mainly used for

- Lazy Loading
- Code Splitting

Next.js uses the same Suspense component for **Server Rendering + Streaming**, making it much more powerful.

---

## When should I use Streaming?

Whenever only **some parts** of the page are slow.

Examples

- Product Reviews
- Comments
- Trending Movies
- Recommended Products
- User Profile Section

Instead of blocking the whole page.

---

## Final Understanding

Streaming doesn't make the page faster.

It makes the **user feel** the page is faster.

Instead of waiting for every asynchronous component to finish, Next.js sends whatever is already ready to the browser. Slow sections are wrapped inside **Suspense**, which shows a fallback UI until the data arrives, then automatically replaces the fallback with the real content.
