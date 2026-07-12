# Next.js - Server Components vs Client Components

## Server Components (Default)

Every component/page in Next.js is a **Server Component** by default.

```jsx
export default function Home() {
  return <h1>Hello</h1>;
}
```

Next.js executes the component on the server, creates the HTML and sends **only HTML** to the browser.

- Static Page → HTML generated during build.
- Dynamic Page → HTML generated on request.

---

## Why Client Components?

Server cannot execute browser specific features like

- useState
- useEffect
- Event Listeners
- window
- document
- localStorage
- sessionStorage

So whenever these are needed, we use

```jsx
"use client";
```

---

## Biggest Confusion

❌ Wrong

```
"use client"

↓

Next.js sends only JS

↓

Browser creates HTML like React
```

✅ Correct

```
"use client"

↓

Next.js creates HTML

↓

Browser receives HTML

↓

Browser downloads component JS

↓

Hydration

↓

Hooks & Events start working
```

So browser gets

- HTML ✅
- Whole Component JS ✅

Not only hooks or event listeners.

---

## Server vs Client

### Server Component

```
Server executes

↓

HTML

↓

Browser
```

Browser gets

```
HTML ✅
JS ❌
```

---

### Client Component

```
Server executes

↓

HTML

↓

Browser

↓

Download JS

↓

Hydration
```

Browser gets

```
HTML ✅
JS ✅
```

---

## Why does console.log() run twice?

Because Client Components execute

1. On Server → Create HTML
2. On Browser → Hydration

So

```
Server Console

↓

Hello

Browser Console

↓

Hello
```

---

## Why localStorage throws error?

Server doesn't know

```js
localStorage;
```

Browser does.

Safe check

```js
if(typeof localStorage !== "undefined")
```

`typeof` returns `"undefined"` instead of throwing an error.

---

## Client Boundary

Recommended

```
Blog Page (Server)

↓

Likes (Client)
```

Only Likes sends JS.

Whole page doesn't need to become Client.

Rule

```
Server
   ↓
Client
```

✅ Allowed

```
Client
   ↓
Server
```

❌ Not Allowed

Everything below a Client Component also becomes Client.

---

## When should I use "use client"?

Whenever I need

- Hooks
- Event Listeners
- Browser APIs
- Forms
- Animations
- Local Storage
- Window / Document

Otherwise keep components as **Server Components**.

---

## Final Understanding

`"use client"` **doesn't mean** "send only JS to browser."

It means

- Next.js still creates the initial HTML.
- Browser also receives the whole component's JS.
- Browser hydrates the component and enables hooks, state, events and browser APIs.
