# Loading UI in Next.js (`loading.jsx`)

## What is `loading.jsx`?

`loading.jsx` is a special file in Next.js that automatically displays a loading UI while a route segment is being rendered.

We don't have to manually create a loading state using `useState()` or `useEffect()`.

Next.js handles it automatically.

---

## Folder Structure

```
app/

└── posts/
    ├── page.jsx
    └── loading.jsx
```

Whenever the user visits

```
/posts
```

Next.js knows that it should display

```
loading.jsx
```

while the page is being prepared.

---

## Basic Example

### loading.jsx

```jsx
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

No imports.

No props.

No configuration.

Simply create the file.

---

## How it Works

Suppose our page fetches data.

```jsx
export default async function Posts() {
  const response = await fetch(API_URL);
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

If fetching takes a few seconds, users would normally stare at a blank screen.

Instead,

Next.js automatically shows

```
Loading...
```

until the page is ready.

---

## Rendering Flow

```
User requests page

↓

Next.js starts rendering the route

↓

Server Component starts fetching data

↓

loading.jsx is displayed

↓

Data fetching completes

↓

Server finishes rendering

↓

Actual page replaces loading.jsx
```

---

## My Initial Understanding

I thought

> `loading.jsx` is displayed until the data is fetched completely.

---

## What I Understood

A more accurate explanation is

`loading.jsx` is displayed while **Next.js is preparing the current route segment**.

This often includes waiting for server-side data fetching.

Once the route has finished rendering, Next.js automatically replaces the loading UI with the actual page.

So it isn't only waiting for data.

It is waiting until the entire route segment is ready.

---

## Why is it Better than React?

In React, we usually write something like

```jsx
const [loading, setLoading] = useState(true);

if (loading) {
  return <Spinner />;
}
```

We have to

- Create state
- Update state
- Handle loading manually

---

In Next.js

We simply create

```
loading.jsx
```

and Next.js automatically manages the loading state for that route.

No extra logic is required.

---

## Special File

`loading.jsx` is one of Next.js' special files.

Just like

- `page.jsx`
- `layout.jsx`
- `error.jsx`
- `not-found.jsx`

Next.js automatically recognizes

```
loading.jsx
```

without importing it anywhere.

---

## Things I Learned

- `loading.jsx` is a special Next.js file.
- It provides a loading UI automatically.
- It is placed in the same folder as the route where the loading UI is needed.
- No `useState()` or `useEffect()` is required.
- No manual loading logic is required.
- It is commonly used with Server Components that fetch data.
- Once the route segment is ready, Next.js automatically replaces the loading UI with the actual page.

---

## Final Understanding

`loading.jsx` is a built-in Next.js feature that automatically displays a loading UI while a route segment is being prepared. This usually includes waiting for server-side data fetching, but it is not limited to just fetching data. Instead of manually managing loading states with `useState()` and `useEffect()`, we simply create a `loading.jsx` file inside the route folder, and Next.js takes care of showing and hiding it at the appropriate time.
