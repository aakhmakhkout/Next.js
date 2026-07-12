# Next.js - Server Side Rendering (SSR)

## What is SSR?

Server Side Rendering (SSR) is a rendering strategy where Next.js generates the HTML on the server before sending it to the browser.

This allows users to see content immediately without waiting for JavaScript to execute.

---

## Rendering Flow

```
User visits Website

↓

Browser sends Request

↓

Next.js Server executes React Components

↓

Generates HTML

↓

Browser receives HTML

↓

Browser downloads JavaScript

↓

Hydration

↓

Interactive Website
```

---

## How Next.js works

Next.js first executes the page on the server.

The server creates the HTML and sends it to the browser.

Later, JavaScript is downloaded and React hydrates the page by attaching

- Event Listeners
- Hooks
- State
- Browser APIs

making the page interactive.

---

## Advantages

- Faster Initial Page Load
- Better SEO
- Better Performance
- HTML available immediately
- Less work for browser initially

---

## Disadvantages

- Server does more work
- Every dynamic request requires server rendering
- Slightly slower response than Static Pages

---

## React vs Next.js

### React

```
Browser

↓

Downloads JS

↓

React runs

↓

Creates HTML
```

---

### Next.js

```
Browser

↓

Request

↓

Server creates HTML

↓

Browser receives HTML

↓

Downloads JS

↓

Hydration
```

---

## Final Understanding

Next.js uses Server Side Rendering to generate HTML on the server before sending it to the browser. The browser displays the pre-rendered HTML immediately and later downloads JavaScript to hydrate the page, making it interactive. This approach provides better SEO and faster initial page loading compared to traditional Client Side Rendering.
