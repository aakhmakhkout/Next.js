# Data Fetching in Client Components

## What is Client-side Data Fetching?

Client-side data fetching is the same approach we use in React.

We make the component a Client Component using

```jsx
"use client";
```

Then we use

- `useState()` → Store the fetched data.
- `useEffect()` → Fetch data after the component loads.
- `fetch()` → Get data from an API.
- `setState()` → Update the UI with the received data.

---

## Basic Flow

```
Browser loads page

↓

Hydration completes

↓

useEffect() runs

↓

Fetch Data

↓

setState(data)

↓

React re-renders

↓

Updated UI
```

---

## Basic Structure

```jsx
"use client";

const [posts, setPosts] = useState([]);

useEffect(() => {
    async function getPosts() {
        const res = await fetch(...);
        const data = await res.json();

        setPosts(data);
    }

    getPosts();
}, []);
```

---

## My Biggest Confusion

I already learned hydration.

React compares

```
Real DOM

↓

Virtual DOM
```

But here I was fetching data after hydration.

So I wondered

> If my server only renders

```
<h1>Posts</h1>
```

and later React renders

```
<h1>Posts</h1>

<p>React</p>

<p>Next.js</p>
```

Why doesn't React throw a Hydration Error?

---

## What I Understood

The important thing is

**Hydration only compares the very first render.**

When the server renders

```jsx
const [posts] = useState([]);
```

the state is still

```jsx
[];
```

because `useEffect()` never runs on the server.

So the server generates

```
<h1>Posts</h1>
```

---

When the browser starts React

`useEffect()` still hasn't executed.

So React also sees

```jsx
posts = [];
```

and creates

```
<h1>Posts</h1>
```

Both outputs are identical.

↓

Hydration succeeds.

Only **after hydration** does `useEffect()` run, fetch the data, update the state, and React performs a normal re-render.

So this is **not hydration anymore**, it is normal React rendering.

---

## Another Confusion

I wondered

> If `posts` is a `useState`, why does the server even check it?

I thought Client Components only run in the browser.

---

## What I Understood

A Client Component is **still rendered once on the server** to generate the initial HTML.

The server can execute things like

```jsx
const [posts] = useState([]);
```

because the initial value is already known.

The server **cannot** execute

- `useEffect()`
- Browser APIs (`window`, `document`, `localStorage`)
- Event Listeners

Those only run after the browser loads the page.

---

## Rendering Flow

```
Next.js Server

↓

Client Component executes once

↓

posts = []

↓

Generate HTML

↓

Browser receives HTML

↓

React Hydrates

↓

useEffect() runs

↓

Fetch Data

↓

setPosts()

↓

React Re-renders

↓

UI Updates
```

---

## Hydration vs React Update

### During Hydration

```
Real DOM

↓

Virtual DOM

↓

Compare
```

No fetched data yet.

---

### After Hydration

```
useEffect()

↓

Fetch Data

↓

setState()

↓

Old Virtual DOM

↓

New Virtual DOM

↓

Update Real DOM
```

Now React behaves exactly like a normal React application.

---

## Final Understanding

Client-side data fetching in Next.js works exactly like React. We use `useState()` to store the data and `useEffect()` to fetch it after the page loads. During hydration, both the server and browser render the component using the same initial state, so the generated HTML matches and no hydration error occurs. Only after hydration is complete does `useEffect()` execute, fetch the latest data, update the state, and trigger a normal React re-render to display the fetched content.
