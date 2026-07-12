# Dynamic Routing

## What is Dynamic Routing?

Dynamic Routing allows us to create a **single page** that can handle multiple URLs by using dynamic route segments instead of creating separate pages for each route.

It is useful when the page structure is the same, but the content changes based on the URL.

---

## How Dynamic Routing Works

A dynamic route is created by wrapping the folder name inside square brackets.

Example

```
app
│
└── blogs
    └── [blog]
        └── page.jsx
```

Generated Routes

```
/blogs/react

/blogs/nextjs

/blogs/javascript
```

All these URLs use the **same `page.jsx`**.

---

## Accessing Dynamic Values

The dynamic value is accessed using the `params` object.

```jsx
export default async function Page({ params }) {
  const { blog } = await params;

  return <h1>{blog}</h1>;
}
```

For

```
/blogs/react
```

`params`

```js
{
  blog: "react";
}
```

---

## Why do we need Dynamic Routing?

Without Dynamic Routing

```
blogs

├── react

├── nextjs

├── javascript

├── html

├── css
```

Every blog would require its own folder and page.

With Dynamic Routing

```
blogs

└── [blog]
```

One page handles every blog.

---

## Validation

Since users can enter anything in the URL, it's common to validate the dynamic value.

Example

```jsx
if (!blogs.includes(blog)) {
  notFound();
}
```

If the route doesn't exist, display the custom 404 page.

---

## React vs Next.js

### React

Dynamic routes are created manually.

```jsx
<Route path="/blogs/:blog" element={<Blog />} />
```

Dynamic values are accessed using

```jsx
useParams();
```

---

### Next.js

Dynamic routes are created using folders.

```
[blog]
```

Dynamic values are accessed using

```jsx
params;
```

No extra routing library is needed.

---

## Final Understanding

Dynamic Routing allows a single page to render different content based on the URL. Instead of creating separate pages for every item, Next.js uses dynamic folders (e.g., `[blog]`) and provides the current URL segment through the `params` object. This makes the application more scalable, easier to maintain, and ideal for pages like blogs, products, movies, or user profiles.
