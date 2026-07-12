# Routing

## What is Routing?

Routing is the process of navigating between different pages in a Next.js application. In the App Router, every folder inside the `app` directory represents a route, and a `page.jsx` file inside that folder becomes the page displayed for that route.

---

## How Routing Works

Next.js automatically creates routes based on the folder structure.

Example

```
app
│
├── page.jsx
├── about
│   └── page.jsx
├── services
│   └── page.jsx
└── contact
    └── page.jsx
```

Generated Routes

```
/            → Home

/about       → About

/services    → Services

/contact     → Contact
```

No extra route configuration is required.

---

## Navigation

Navigation between pages is done using Next.js' `Link` component.

```jsx
import Link from "next/link";

<Link href="/about">About</Link>;
```

Using `Link` enables client-side navigation, making page transitions faster without performing a full page reload.

---

## Why use App Router?

The App Router follows a file-based routing system, making the project easier to organize and understand. Instead of manually defining routes like in React Router, Next.js automatically creates them based on the folder structure.

---

## React vs Next.js

### React

Routes are created manually.

```jsx
<Route path="/about" element={<About />} />
```

Requires React Router.

---

### Next.js

Routes are created automatically.

```
about/

↓

page.jsx

↓

/about
```

No additional routing library is required.

---

## Final Understanding

Routing in Next.js is based on the file and folder structure inside the `app` directory. Each folder represents a URL segment, and every `page.jsx` file becomes a route automatically. Navigation is handled using the `Link` component, providing fast client-side navigation without manually configuring routes.
