# Hydration

## What is Hydration?

Hydration is the process where React takes the HTML already present in the browser and **attaches JavaScript** to it, making the page interactive.

The HTML is already visible, but it behaves like a normal static webpage until hydration completes.

---

## Why do we need Hydration?

The server can only send HTML.

HTML can display content, but it cannot

- Handle Click Events
- Use React Hooks
- Update State
- Access Browser APIs

So after the browser receives the HTML, React loads the JavaScript and connects it to the existing HTML instead of creating everything again.

---

## Hydration Flow

```
Next.js Server

↓

Generates HTML

↓

Browser receives HTML

↓

User can already see the page

↓

JavaScript downloads

↓

React Hydrates

↓

Page becomes Interactive
```

---

## What happens during Hydration?

React does **not** recreate the HTML.

Instead it

- Compares the HTML with the React component.
- Attaches Event Listeners.
- Connects Hooks and State.
- Makes the page interactive.

You can think of it as

```
HTML

+

JavaScript

↓

Interactive React App
```

---

## My Biggest Confusion

I thought hydration only happens when a page contains JavaScript or interactive features.

That is **not true**.

Hydration still happens even if the page looks completely static.

---

## Why does Hydration happen on a Static Page?

Suppose we have

```jsx
export default function Home() {
  return <h1>Hello World</h1>;
}
```

There are

- No Hooks
- No State
- No Event Listeners

Still, React hydrates the page.

Why?

Because React doesn't know whether the page will remain static forever.

It hydrates the component tree so that if any interactive component exists now or is added later, React already controls the page.

---

## Doesn't HTML already work without Hydration?

Yes.

Pure HTML works perfectly fine without hydration.

Example

```html
<h1>Hello World</h1>
```

The browser can display this without any JavaScript.

But Next.js applications are React applications.

React needs to know

- which components exist,
- where they are,
- and how they connect together.

Hydration establishes this connection.

---

## My Question

I noticed that even a page with only static HTML still goes through hydration.

I initially thought:

> "If there is no JavaScript, why hydrate at all?"

The answer is that **React hydrates the React tree, not just interactive elements.**

Even if a page currently has no interactivity, React still initializes itself so the application behaves consistently and can support interactive components when needed.

---

## Benefits of Hydration

- Makes Server-rendered pages interactive.
- Preserves the HTML already rendered by the server.
- Avoids recreating the DOM.
- Connects React with the existing page.
- Improves the user experience by showing content before JavaScript finishes loading.

---

## Final Understanding

Hydration is the process where React attaches JavaScript behavior to HTML that has already been rendered by the server. Instead of creating the page again, React reuses the existing HTML, connects event listeners, hooks, and state, and turns the static page into an interactive React application. Hydration happens even on pages that appear completely static because React initializes the entire component tree, ensuring the application behaves consistently and is ready for interactivity whenever needed.
