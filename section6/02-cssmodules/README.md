# 🎨 CSS Modules in Next.js

## 📌 What are CSS Modules?

CSS Modules are a way of writing CSS where styles are scoped locally to a particular component.

In normal CSS, class names are global. This means two different components using the same class name can accidentally affect each other.

CSS Modules solve this problem by generating unique class names automatically.

This prevents unwanted styling conflicts between components and routes.

---

## 1. ⚠️ The Problem with Normal CSS

Suppose we have two components:

**About Page:**

```jsx
import "./about.css";

export default function About() {
  return <h1 className="title">About Page</h1>;
}
```

**Contact Page:**

```jsx
import "./contact.css";

export default function Contact() {
  return <h1 className="title">Contact Page</h1>;
}
```

Both CSS files contain the same selector:

```css
.title {
  color: red;
}
```

Since normal CSS is global, both components can be affected by these styles.

This can cause unexpected styling conflicts.

---

## 2. 🛠️ Using CSS Modules

To use CSS Modules in Next.js, we create CSS files with the `.module.css` extension.

**Example folder structure:**

```text
app/
│
├── about/
│   ├── page.jsx
│   └── about.module.css
│
└── contact/
    ├── page.jsx
    └── contact.module.css
```

The important difference is the `.module.css` extension.

---

## 3. 📄 Creating and Importing CSS Modules

Let's create a CSS Module for the About page.

**Example: `about.module.css`**

```css
.title {
  color: red;
  font-size: 40px;
}
```

Now import it into the component.

**Example: `page.jsx`**

```jsx
import styles from "./about.module.css";

export default function About() {
  return <h1 className={styles.title}>About Page</h1>;
}
```

### What happens here?

- We import the CSS Module as `styles`.
- Instead of directly writing the class name, we access it using `styles.title`.
- Next.js generates a unique class name for this CSS Module.
- The generated class is applied to the element.

For example, the generated class might look something like:

```html
<h1 class="about_title__a8x2k">About Page</h1>
```

The actual generated name is handled automatically by the build system.

---

## 4. 🔒 How CSS Modules Prevent Conflicts

Suppose both About and Contact pages use a class named `.title`.

**About Module:**

```css
.title {
  color: red;
}
```

**Contact Module:**

```css
.title {
  color: blue;
}
```

Both components can use:

```jsx
className={styles.title}
```

But Next.js generates different unique class names for each module.

Conceptually:

```text
About Module
    |
    v
.title
    |
    v
about_title__a8x2k


Contact Module
    |
    v
.title
    |
    v
contact_title__b7y3p
```

Therefore:

- About Page gets red styling.
- Contact Page gets blue styling.
- Both can use the same original class name without conflicting.

---

## 5. 🧩 Using Multiple Classes

We can also apply multiple CSS Module classes to a single element.

**Example:**

```jsx
import styles from "./about.module.css";

export default function About() {
  return <h1 className={`${styles.title} ${styles.heading}`}>About Page</h1>;
}
```

We can also combine a CSS Module class with a normal global class:

```jsx
<h1 className={`global-title ${styles.title}`}>About Page</h1>
```

---

## 6. ⚠️ Important Things to Remember

- CSS Module files must use the `.module.css` extension.
- Import the CSS Module into the component.
- Access class names using the imported object, such as `styles.title`.
- Class names are automatically generated and scoped locally.
- Two different modules can safely use the same class name.
- CSS Modules can also contain element selectors and IDs, but those selectors are not automatically scoped in the same way as local class selectors. Prefer classes for component styling.
- CSS Modules do not replace global CSS. Global styles are still useful for body styling, fonts, resets, and shared design rules.

---

## 🆚 Normal CSS vs CSS Modules

| Normal CSS                 | CSS Modules                         |
| -------------------------- | ----------------------------------- |
| Global class names         | Locally scoped class names          |
| Can cause naming conflicts | Prevents local class-name conflicts |
| Uses `className="title"`   | Uses `className={styles.title}`     |
| Imported as a stylesheet   | Imported as a JavaScript object     |
| Uses `.css` extension      | Uses `.module.css` extension        |

---

## 🧠 Final Understanding

CSS Modules help prevent styling conflicts by generating unique class names for individual CSS Modules.

The basic process is:

1. Create a `.module.css` file.
2. Write normal CSS inside it.
3. Import the file into your component.
4. Access classes through the imported object.
5. Apply them using `className={styles.className}`.

**The key idea:** Normal CSS uses global selectors, whereas CSS Modules scope local class names to their respective modules. This makes component styling easier to manage in large Next.js applications.
