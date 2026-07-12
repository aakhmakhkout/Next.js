# Next.js - Dynamically Rendering Static Pages

## What is it?

By default, Next.js tries to make every page **Static** because static pages are faster and don't need to be rendered on every request.

But sometimes we need the page to use request-specific data like

- Cookies
- Search Parameters
- Headers

In these cases, we have to convert the page into a **Dynamic Page**.

---

## Why do we need it?

Suppose I have

```jsx
About Page
```

Normally this page can be Static.

But tomorrow I want

- User Theme
- Logged In User
- Search Filters
- Language from Cookies

Now the page depends on **who is visiting**.

Static HTML cannot know this during build.

So the page must become Dynamic.

---

## Different Ways

### 1. Force Dynamic

```jsx
export const dynamic = "force-dynamic";
```

Always render this page on every request.

Even if Next.js thinks it can be static.

---

### 2. searchParams

```jsx
export default async function Page({ searchParams }) {
  const params = await searchParams;
}
```

Using `async` + `await searchParams` tells Next.js

> This page depends on request data.

↓

Dynamic Page.

---

### 3. cookies()

```jsx
import { cookies } from "next/headers";

const cookieStore = await cookies();
```

Cookies are different for every user.

So Next.js automatically makes the page Dynamic.

---

## dynamic Options

### auto (Default)

```jsx
export const dynamic = "auto";
```

Next.js decides automatically.

If it finds Dynamic APIs like

- cookies()
- headers()
- searchParams

↓

Dynamic

Otherwise

↓

Static

---

### force-static

```jsx
export const dynamic = "force-static";
```

Force the page to stay Static.

Even if I use

```jsx
cookies();

searchParams;
```

they return empty values because Static pages cannot use request-specific data.

---

### error

```jsx
export const dynamic = "error";
```

Used when I want the page to **always remain Static**.

If someone accidentally uses

- cookies()
- searchParams
- headers()

↓

Build fails with an error.

Useful in big projects where Static rendering should never be broken.

---

## My Biggest Confusion

I thought

> Why don't we simply make every page Dynamic?

Because Dynamic Rendering means

```
Request

↓

Render Page

↓

Generate HTML

↓

Send
```

for **every request**.

This increases server work.

Next.js prefers Static Rendering because it is

- Faster
- Better for SEO
- Less Server Load
- Better Performance

Only make a page Dynamic when it actually needs request-specific data.

---

## React vs Next.js

### React

Everything is rendered on the client.

There is no concept of

- Static
- Dynamic

Every page behaves the same.

---

### Next.js

Next.js first asks

```
Can I make this page Static?

↓

Yes

↓

Static Page

↓

No

↓

Dynamic Page
```

Static is always preferred.

---

## Final Understanding

Next.js automatically tries to make pages **Static** because they are faster and require less server work. When a page depends on request-specific data such as cookies, search parameters, or headers, it must become **Dynamic** so the server can generate fresh HTML for each request. Developers can control this behavior using `dynamic = "force-dynamic"`, `force-static`, `error`, or leave it as `auto`, allowing Next.js to choose the best rendering strategy automatically.
