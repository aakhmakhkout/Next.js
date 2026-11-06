# 🪆 Nested Error Handling in Next.js

## 📌 What is Nested Error Handling?

In Next.js App Router, applications can contain multiple routes, nested layouts, and pages.

An error in one route should not necessarily crash the entire application.

To handle errors at different levels, Next.js allows us to create multiple `error.js` files inside different route segments.

This is called **Nested Error Handling**.

---

## 1. 🏗️ Understanding Error Boundary Hierarchy

Every `error.js` file creates an Error Boundary around the route segment's contents.

Consider this folder structure:

```text
app/
│
├── layout.jsx
├── page.jsx
├── error.js
│
└── dashboard/
    ├── layout.jsx
    ├── page.jsx
    ├── error.js
    │
    └── settings/
        ├── layout.jsx
        ├── page.jsx
        └── error.js
```

Here, we have three route levels:

1. Root route
2. Dashboard route
3. Settings route

Each route has its own `error.js` file.

The nearest applicable Error Boundary handles an error.

---

## 2. ⚠️ How Does the Hierarchy Work?

An important detail is that `error.js` does not wrap its own route segment's `layout.js`.

Instead, it wraps the contents below that layout.

For example:

```text
dashboard/
├── layout.jsx
├── page.jsx
└── error.js
```

The conceptual structure is:

```text
Parent Layout
     |
     v
Dashboard Layout
     |
     v
Error Boundary (dashboard/error.js)
     |
     v
Dashboard Page
```

Notice that `dashboard/layout.jsx` is outside its own `error.js` boundary.

Therefore:

- Errors in `dashboard/page.jsx` can be caught by `dashboard/error.js`.
- Errors in components rendered inside the dashboard page can also be caught.
- Errors thrown by `dashboard/layout.jsx` cannot be caught by `dashboard/error.js`.

This is why the placement of `error.js` matters.

---

## 3. 🛠️ Handling Layout Errors Using the Parent Route

If an error occurs inside a layout, we need an Error Boundary above that layout.

For example:

```text
app/
│
├── layout.jsx
├── error.js
│
└── dashboard/
    ├── layout.jsx
    ├── page.jsx
    └── error.js
```

Here:

- `dashboard/error.js` handles errors from the dashboard page and its descendants.
- `app/error.js` can handle errors thrown by `dashboard/layout.jsx`, because that layout is inside the root route's error boundary.

### Visual Explanation

```text
          Root Layout
               |
               v
       Root Error Boundary
          (app/error.js)
               |
               v
        Dashboard Layout
               |
               v
     Dashboard Error Boundary
       (dashboard/error.js)
               |
               v
        Dashboard Page
```

### What happens if an error occurs?

| Error location                 | Which error.js handles it?    |
| ------------------------------ | ----------------------------- |
| Dashboard page                 | `dashboard/error.js`          |
| Dashboard page child component | `dashboard/error.js`          |
| Dashboard layout               | `app/error.js`                |
| Root layout                    | Not handled by `app/error.js` |

The root layout is a special case because it has no parent route segment. We will cover its error handling separately using `global-error.js`.

---

## 4. 🔄 How Nested Error Handling Works

Let's understand the execution flow.

Suppose an error occurs inside `dashboard/page.jsx`.

```text
       Dashboard Page
              |
              v
        Error Occurs
              |
              v
   Find Nearest Error Boundary
              |
              v
    dashboard/error.js Found
              |
              v
      Display Fallback UI
```

Now suppose an error occurs inside `dashboard/layout.jsx`.

```text
       Dashboard Layout
              |
              v
        Error Occurs
              |
              v
   Find Nearest Error Boundary
              |
              v
       app/error.js Found
              |
              v
      Display Fallback UI
```

Next.js searches upward for the nearest applicable Error Boundary that can catch the error.

---

## 5. 🧠 Important Things to Remember

- Each `error.js` creates an Error Boundary for its route segment's children.
- An `error.js` file does not catch errors from the layout in the same segment.
- To handle errors in a nested layout, create an `error.js` in its parent route segment.
- The nearest applicable Error Boundary handles the error.
- The root layout cannot be handled by `app/error.js` because that boundary is inside the root layout.
- `global-error.js` is used for errors that reach the root layout boundary.

---

## 🧠 Final Understanding

Nested Error Handling allows us to handle errors at multiple levels of a Next.js application.

The most important rule is:

**An error.js file handles errors below its segment's layout, not errors inside that layout itself.**

For example:

- `dashboard/error.js` handles errors in `dashboard/page.jsx`.
- `app/error.js` handles errors in `dashboard/layout.jsx`.
- `global-error.js` handles errors that reach the root layout.

By placing Error Boundaries at different route levels, we can isolate errors and prevent one broken section from unnecessarily affecting the entire application.
