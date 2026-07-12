# Next.js - Static Site Generation (SSG)

## What is SSG?

Static Site Generation (SSG) is a rendering strategy where Next.js generates the HTML of a page **during build time (`npm run build`)** instead of when a user visits the page.

Once the HTML is created, it is stored and reused for every visitor.

---

## Why do we need SSG?

Normally, Dynamic Routes are rendered when a user visits them.

Example

```
/blogs/react

↓

User visits

↓

Server generates HTML

↓

Browser
```

But suppose I already know all my blogs beforehand.

```
react
nextjs
javascript
```

Why generate them every time?

Instead, Next.js can generate them during build and simply serve the ready HTML.

---

## How do we make Dynamic Routes Static?

Using

```jsx
generateStaticParams();
```

Example

```jsx
export async function generateStaticParams() {
  return [{ blog: "react" }, { blog: "nextjs" }, { blog: "javascript" }];
}
```

During

```bash
npm run build
```

Next.js creates

```
/blogs/react

/blogs/nextjs

/blogs/javascript
```

as static HTML pages.

---

## Rendering Flow

Without SSG

```
User visits

↓

Server generates HTML

↓

Browser
```

With SSG

```
npm run build

↓

Generate HTML

↓

Store HTML

↓

User visits

↓

Server sends ready HTML
```

Notice

The browser still sends a request.

The server simply doesn't need to generate the page again.

---

## Benefits

- Faster Loading
- Better SEO
- Lower Server Load
- Can be cached easily
- Better Performance
- Cheaper Hosting

---

## Where do we mostly use SSG?

Best for pages whose content doesn't change often.

Examples

- Blogs
- Documentation
- Portfolio
- Landing Pages
- Product Pages
- Course Pages

---

## My Biggest Confusion

I thought

> Browser doesn't contact the server because the page is already built.

Not true.

Browser **still sends a request**.

The difference is

```
Without SSG

↓

Server creates HTML
```

vs

```
With SSG

↓

Server already has HTML

↓

Immediately sends it
```

So SSG saves **rendering time**, not the network request.

---

## Dynamic Routes + SSG

Dynamic routes like

```
/blogs/[blog]
```

can also become Static.

Next.js simply generates HTML for every value returned by

```jsx
generateStaticParams();
```

So the route remains dynamic in structure, but the known routes become static pages.

---

## React vs Next.js

### React

No SSG by default.

Browser downloads JavaScript and renders everything.

---

### Next.js

```
Build

↓

Generate HTML

↓

Store HTML

↓

Browser requests

↓

Ready HTML
```

---

## Final Understanding

Static Site Generation (SSG) allows Next.js to generate HTML pages during the build process instead of rendering them on every request. It is commonly used for pages whose content is known beforehand and changes infrequently, such as blogs, documentation, or product pages. Using `generateStaticParams()`, Next.js can even pre-render dynamic routes as static pages, resulting in faster loading, improved SEO, and reduced server work.
