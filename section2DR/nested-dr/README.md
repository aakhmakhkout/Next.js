# Nested Dynamic Routing

## What is Nested Dynamic Routing?

Nested Dynamic Routing is used when a dynamic route itself contains another dynamic route.

It allows us to create hierarchical URLs where each dynamic segment represents different data.

---

## How Nested Dynamic Routing Works

Example folder structure

```
app
│
└── blogs
    └── [blog]
        └── [section]
            └── page.jsx
```

Generated Routes

```
/blogs/react/introduction

/blogs/react/hooks

/blogs/nextjs/routing

/blogs/javascript/arrays
```

The first dynamic folder represents the blog, while the second represents a specific section of that blog.

---

## Accessing Dynamic Values

Both values are available through the `params` object.

```jsx
export default async function Page({ params }) {
  const { blog, section } = await params;

  return (
    <>
      <h1>{blog}</h1>
      <h2>{section}</h2>
    </>
  );
}
```

For

```
/blogs/react/hooks
```

`params`

```js
{
    blog: "react",
    section: "hooks"
}
```

---

## Why do we need Nested Dynamic Routing?

Without Nested Dynamic Routing

```
blogs

├── react-hooks

├── react-introduction

├── nextjs-routing

├── javascript-arrays
```

Every combination would need a separate route.

With Nested Dynamic Routing

```
blogs

└── [blog]
    └── [section]
```

One route structure handles every blog and its sections.

---

## React vs Next.js

### React

Nested dynamic routes are created manually.

```jsx
<Route path="/blogs/:blog/:section" />
```

Dynamic values are accessed using

```jsx
useParams();
```

---

### Next.js

Create nested dynamic folders.

```
[blog]

↓

[section]
```

Access values using

```jsx
params.blog;

params.section;
```

---

## Final Understanding

Nested Dynamic Routing extends Dynamic Routing by allowing multiple dynamic segments in a URL. Each dynamic folder captures its own part of the URL through the `params` object, making it easy to build hierarchical pages such as blog sections, product details, movie information, user profiles, or any multi-level content while reusing the same page structure.
