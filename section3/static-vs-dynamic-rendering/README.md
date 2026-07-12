# Next.js - Static vs Dynamic Rendering

## What is Rendering?

Rendering simply means

> Converting React Components into HTML.

The main question is

> **When is that HTML created?**

There are two ways

- Static Rendering
- Dynamic Rendering

---

# Static Rendering

In Static Rendering, Next.js creates the HTML **during build time (`npm run build`)** because it already knows what the page will look like.

Example

```jsx
export default function Home() {
  return <h1>Welcome</h1>;
}
```

Flow

```
Build

↓

Generate HTML

↓

Store HTML

↓

User visits

↓

Send ready HTML
```

---

# Dynamic Rendering

In Dynamic Rendering, Next.js **cannot know the final HTML during build** because the page depends on request-specific or frequently changing data.

So the HTML is created **when the user requests the page**.

Flow

```
User visits

↓

Server executes page

↓

Fetch latest data

↓

Generate HTML

↓

Browser
```

---

## Static vs Dynamic

### Static

- HTML created during Build
- Faster
- Less Server Work
- Better Performance
- Better SEO

---

### Dynamic

- HTML created on Request
- Always Latest Data
- More Server Work
- Slightly Slower
- Better for Personalized Content

---

## My Biggest Confusion

I thought

> Dynamic pages don't create HTML during build, they only send JS to browser.

Wrong.

Dynamic pages **still send HTML**.

The difference is

```
Static

↓

HTML created during Build
```

vs

```
Dynamic

↓

HTML created during Request
```

Both send HTML to the browser.

Only the timing changes.

---

## When should I use Static?

When content is already known.

Examples

- About
- Contact
- Portfolio
- Blogs
- Documentation
- Landing Pages

---

## When should I use Dynamic?

When content changes per request or per user.

Examples

- Dashboard
- User Profile
- Search Results
- Shopping Cart
- Notifications
- Weather
- Stock Prices

---

## React vs Next.js

### React

```
Browser

↓

Download JS

↓

React runs

↓

Create HTML
```

Everything happens inside the browser.

---

### Next.js Static

```
Build

↓

Generate HTML

↓

Browser receives ready HTML
```

---

### Next.js Dynamic

```
Request

↓

Server generates HTML

↓

Browser receives HTML
```

---

## Easy Memory Trick

Ask yourself

> **When is the HTML created?**

If the answer is

```
During Build
```

↓

Static Rendering

If the answer is

```
When User Visits
```

↓

Dynamic Rendering

---

## Final Understanding

Static Rendering generates HTML during the build process because the content is already known, allowing the same HTML to be reused for every visitor. Dynamic Rendering generates HTML at request time because the content depends on user-specific or frequently changing data. Both rendering strategies send HTML to the browser, but the difference lies in **when** the HTML is created, not **whether** it is created.
