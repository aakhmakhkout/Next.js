# Layout File (`layout.jsx`)

## What is a Layout?

A `layout.jsx` file is a special file in Next.js used to create a **shared layout** for multiple pages.

Instead of repeating common UI like a Navbar, Sidebar, or Footer on every page, we place them once inside `layout.jsx`, and Next.js automatically wraps all child pages with that layout.

---

## Why do we need Layouts?

Suppose we have

```
Home

About

Services

Contact
```

and every page needs

- Navbar
- Sidebar
- Footer

Without Layout

```
Home
├── Navbar
├── Sidebar
├── Content
└── Footer

About
├── Navbar
├── Sidebar
├── Content
└── Footer

Services
├── Navbar
├── Sidebar
├── Content
└── Footer
```

The same code is repeated on every page.

With Layout

```
Layout
├── Navbar
├── Sidebar
├── {children}
└── Footer
```

Now every page automatically gets the same layout.

---

## How Layout Works

Example

```
app
│
├── layout.jsx
├── page.jsx
├── about
│   └── page.jsx
└── services
    └── page.jsx
```

`layout.jsx`

```jsx
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      {children}

      <Footer />
    </>
  );
}
```

When visiting

```
/about
```

Next.js renders

```
Navbar

↓

Sidebar

↓

About Page

↓

Footer
```

The `About Page` is automatically passed as the `children`.

---

## My Biggest Confusion

I thought `layout.jsx` makes the current page dynamic.

Not true.

Its main job is to **share a common UI** across multiple pages.

The `children` prop simply tells Next.js

> "Render the current page here."

It behaves similarly to React Router's `<Outlet />`, but with the benefit that layouts are automatically shared through the folder structure.

---

## Nested Layouts

Layouts can also be nested.

Example

```
app
│
├── layout.jsx
│
└── dashboard
    ├── layout.jsx
    ├── page.jsx
    └── profile
        └── page.jsx
```

Flow

```
Root Layout

↓

Dashboard Layout

↓

Current Page
```

Each nested layout adds its own shared UI.

---

## React vs Next.js

### React

Shared layouts are usually created manually using

- Components
- React Router
- `<Outlet />`

---

### Next.js

Simply create

```
layout.jsx
```

inside a folder.

Every page inside that folder automatically uses that layout.

No extra configuration is required.

---

## Final Understanding

The `layout.jsx` file is a special Next.js file used to create reusable layouts for multiple pages. It helps avoid repeating common UI elements such as the Navbar, Sidebar, and Footer by wrapping all child pages inside a shared layout. The `children` prop represents the current page being rendered, allowing the layout to remain the same while only the page content changes.
