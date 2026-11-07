# 🎨 Adding CSS Styles in Next.js

## 📌 Introduction

Next.js supports different ways of adding CSS to an application.

We can use regular CSS files just like we do in React, but Next.js handles CSS loading and bundling based on the application structure.

In this lecture, we learned how to import CSS files and how styles can affect multiple routes during client-side navigation.

---

## 1. 📄 Using CSS Files in Next.js

We can create normal CSS files and import them into our components or layouts.

**Example folder structure:**

```text
app/
├── layout.jsx
├── page.jsx
├── globals.css
│
└── about/
    ├── page.jsx
    └── about.css
```

### Importing CSS

We can import a CSS file using a normal JavaScript import statement.

**Example: `app/about/page.jsx`**

```jsx
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
    </div>
  );
}
```

**Example: `app/about/about.css`**

```css
.container {
  background-color: black;
  color: white;
  padding: 20px;
}
```

Once imported, the CSS rules are included in the application's generated stylesheets.

---

## 2. 🌍 Global CSS

Global CSS contains styles that can affect elements across the application.

We commonly use it for:

- Body styling.
- Default fonts.
- Background colors.
- CSS resets.
- Common HTML element styles.

**Example: `app/globals.css`**

```css
body {
  margin: 0;
  background-color: #111;
  color: white;
}

h1 {
  font-size: 32px;
}
```

We generally import global CSS inside the root layout.

**Example: `app/layout.jsx`**

```jsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

This makes the global styles available throughout the application.

---

## 3. ⚠️ Understanding CSS Loading During Navigation

One important behaviour we learned is that importing a normal CSS file inside a route does not automatically make its styles isolated to that route.

Consider this example:

**Route A: `/about`**

```jsx
import "./about.css";

export default function About() {
  return <h1 className="title">About Page</h1>;
}
```

**CSS: `about.css`**

```css
.title {
  color: red;
  font-size: 40px;
}
```

**Route B: `/contact`**

```jsx
export default function Contact() {
  return <h1 className="title">Contact Page</h1>;
}
```

### What happens?

1. We visit `/about`.
2. Next.js loads the CSS file imported by the About route.
3. We navigate to `/contact` using client-side navigation.
4. The Contact page also contains the `.title` class.
5. Since the CSS selector is global, the Contact page's heading can also receive the red color.

**Why?**

Because normal CSS selectors are not scoped to individual components or routes.

A selector such as:

```css
.title {
  color: red;
}
```

targets every matching element in the document while that stylesheet is active.

### Important observation

CSS files imported by routes can remain loaded during client-side navigation. Therefore, styles may continue affecting other routes even after leaving the route where the CSS was originally imported.

Refreshing the browser can produce a different result because the page and its required stylesheets are loaded again for the current route.

However, this is not a guaranteed CSS cleanup mechanism. The exact stylesheet loading and removal behaviour can depend on Next.js bundling and navigation.

---

## 4. 🧠
