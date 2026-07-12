# Catch-All Routes

## What are Catch-All Routes?

Catch-All Routes allow a single page to handle **multiple nested dynamic URL segments** instead of creating a separate folder for every level.

They are created using

```
[...folderName]
```

The captured URL segments are stored as an **array**.

---

## How Catch-All Routes Work

Example folder structure

```
app
│
└── docs
    └── [...slug]
        └── page.jsx
```

Generated Routes

```
/docs/react

/docs/react/hooks

/docs/react/hooks/useState

/docs/react/hooks/useState/examples
```

All these URLs use the **same `page.jsx`**.

---

## Accessing Values

The values are available inside the `params` object as an array.

```jsx
export default async function Page({ params }) {
  const { slug } = await params;

  console.log(slug);
}
```

Example

```
/docs/react/hooks/useState
```

`params`

```js
{
  slug: ["react", "hooks", "useState"];
}
```

---

## Why do we need Catch-All Routes?

Without Catch-All Routes

```
docs

├── [topic]

│   ├── [chapter]

│   │   ├── [lesson]

│   │   │   └── page.jsx
```

As the URL grows, more nested folders are needed.

With Catch-All Routes

```
docs

└── [...slug]
```

One page can handle every nested path.

---

## Important Point

Catch-All Routes **must** have at least one URL segment.

For example

Folder

```
[...slug]
```

Works

```
/docs/react

/docs/react/hooks
```

Does **NOT** work

```
/docs
```

because no value exists for `slug`.

For this behavior, Optional Catch-All Routes are used.

---

## React vs Next.js

### React

Nested dynamic routes are created manually.

```jsx
<Route path="/docs/*" />
```

The developer manually handles the remaining path.

---

### Next.js

Simply create

```
[...slug]
```

Next.js automatically captures all remaining URL segments into an array.

---

## Final Understanding

Catch-All Routes allow a single dynamic route to capture **one or more nested URL segments** without creating deeply nested folders. Next.js stores all matched segments inside the `params` object as an array, making them useful for documentation websites, file explorers, nested categories, movie sections, or any URL where the depth is unknown beforehand.
