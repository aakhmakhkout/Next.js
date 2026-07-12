# Next.js - Incremental Static Regeneration (ISR)

## What is ISR?

Incremental Static Regeneration (ISR) is a rendering strategy that combines the speed of **Static Site Generation (SSG)** with the ability to update the page over time.

The page is first generated during **build time**, but after a specified interval, Next.js can regenerate it with the latest data.

---

## Why do we need ISR?

SSG has one problem.

Suppose I build my website at

```
1:00 PM
```

The page contains

```
Views = 100

Current Time = 1:00 PM
```

One hour later

```
Views = 500

Current Time = 2:00 PM
```

The user still sees

```
Views = 100

Current Time = 1:00 PM
```

because the HTML was generated during build.

ISR solves this problem.

---

## How do we use ISR?

```jsx
export const revalidate = 60;
```

This tells Next.js

> Regenerate this page after every **60 seconds**.

---

## How does ISR work?

Suppose

```jsx
export const revalidate = 5;
```

Timeline

```
1:12:10

↓

Page 1 generated
```

↓

5 seconds pass

↓

User refreshes

Server says

```
Page 1 already exists.

↓

Send Page 1 immediately.

↓

Start generating Page 2.
```

Browser receives

```
Page 1
```

while the server generates

```
Page 2
```

Next refresh

↓

Browser receives

```
Page 2
```

---

## My Biggest Confusion

I thought

> After 5 seconds, Next.js automatically regenerates the page.

Not true.

Nothing happens after the timer ends.

The regeneration only starts **when a user visits or refreshes the page after the revalidation time has expired**.

---

## Another Confusion

I expected

```
Refresh

↓

Newest Page
```

Instead I got

```
Old Page
```

Reason

ISR follows

```
Serve Current

↓

Build Next
```

The first request after the timer gets the old cached page.

Meanwhile Next.js regenerates the new page in the background.

The next visitor receives the updated page.

---

## Rendering Flow

```
Build

↓

Generate HTML

↓

Store HTML

↓

Time expires

↓

User visits

↓

Send old HTML immediately

↓

Regenerate new HTML

↓

Replace old HTML
```

---

## Benefits

- Faster than Dynamic Rendering
- Fresher data than SSG
- Lower Server Load
- Better Performance
- Better SEO
- Doesn't require rebuilding the whole project

---

## Where do we mostly use ISR?

Best for pages that change **occasionally**, but not every second.

Examples

- Blogs
- Product Pages
- Movie Details
- News Articles
- Documentation
- E-commerce

---

## SSG vs ISR

### SSG

```
Build

↓

Generate HTML

↓

Never changes
```

---

### ISR

```
Build

↓

Generate HTML

↓

After interval

↓

User visits

↓

Generate Updated HTML
```

---

## Easy Memory Trick

SSG

```
Build Once

↓

Use Forever
```

ISR

```
Build Once

↓

Serve Current

↓

Build Next

↓

Replace Current
```

---

## Final Understanding

Incremental Static Regeneration (ISR) is an extension of Static Site Generation that allows static pages to stay up to date without rebuilding the entire application. Pages are initially generated during the build process and cached. After the specified `revalidate` interval expires, the next request receives the existing cached page while Next.js regenerates a fresh version in the background. Once regeneration is complete, the updated page replaces the old cached version for future visitors.
