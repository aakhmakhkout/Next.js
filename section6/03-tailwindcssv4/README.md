# 🎨 Tailwind CSS in Next.js (Latest Version)

## 📌 What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that allows us to style elements directly using predefined utility classes.

For example:

```jsx
<h1 className="text-3xl font-bold text-blue-500">Hello Next.js</h1>
```

Instead of writing separate CSS rules for every element, we use Tailwind utility classes.

Next.js supports Tailwind CSS directly, and the latest Tailwind CSS v4 introduces a different way of configuring and customizing Tailwind.

---

## 1. 🆕 What Changed in Tailwind CSS v4?

The biggest change in Tailwind v4 is its **CSS-first configuration**.

In Tailwind v3, we generally customized properties inside a separate `tailwind.config.js` file.

In Tailwind v4, we can directly customize Tailwind's theme inside our main CSS file using the `@theme` directive.

### Tailwind v3

```text
project/
├── app/
│   ├── globals.css
│   └── page.jsx
│
├── tailwind.config.js
└── postcss.config.js
```

We configured custom properties inside `tailwind.config.js`.

### Tailwind v4

```text
project/
├── app/
│   ├── globals.css
│   └── page.jsx
│
└── postcss.config.mjs
```

We can define custom theme properties directly inside `globals.css`.

**Important:** This is a change introduced by Tailwind CSS v4, not specifically by a new Next.js version.

---

## 2. ⚙️ Setting Up Tailwind CSS v4 in Next.js

When creating a new Next.js project, we can select Tailwind CSS during project setup.

For manual installation, install these packages:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

### Configure PostCSS

Create or update `postcss.config.mjs` in the project root.

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

This tells PostCSS to use the Tailwind CSS plugin when processing CSS files.

### Import Tailwind CSS

Inside `app/globals.css`, add:

```css
@import "tailwindcss";
```

Now Tailwind CSS is available throughout the application when this stylesheet is imported by the root layout.

---

## 3. 🎨 Customizing Tailwind Properties Using @theme

This is the most important feature we learned in this lecture.

In Tailwind v4, we can customize theme properties directly inside our CSS file using `@theme`.

**Example: `app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-primary: #8b5cf6;
  --color-secondary: #1e1b4b;

  --font-display: "Poppins", sans-serif;

  --breakpoint-3xl: 120rem;
}
```

### Understanding @theme

The `@theme` directive allows us to define custom design tokens that Tailwind uses to generate utility classes.

Let's understand each property.

**1. Custom Colors**

```css
@theme {
  --color-primary: #8b5cf6;
}
```

Now we can use:

```jsx
<div className="bg-primary text-white">Hello</div>
```

Tailwind generates utilities based on the custom color.

Other examples:

```jsx
<div className="text-primary">
  Text
</div>

<div className="border-primary">
  Border
</div>
```

**2. Custom Fonts**

```css
@theme {
  --font-display: "Poppins", sans-serif;
}
```

Now we can use:

```jsx
<h1 className="font-display">Welcome</h1>
```

**3. Custom Breakpoints**

```css
@theme {
  --breakpoint-3xl: 120rem;
}
```

Now we can use:

```jsx
<div className="text-sm 3xl:text-2xl">Responsive Text</div>
```

The `3xl:` utility applies when the viewport reaches the custom breakpoint.

---

## 4. 🧩 Adding Normal CSS Alongside Tailwind

We can still write normal CSS inside `globals.css`.

For example:

```css
@import "tailwindcss";

@theme {
  --color-primary: #8b5cf6;
}

body {
  background-color: #09090b;
  color: white;
}

.custom-heading {
  letter-spacing: 2px;
}
```

Here:

- `@theme` defines Tailwind theme properties.
- `body` applies normal global CSS.
- `.custom-heading` defines a regular CSS class.

We can use both Tailwind utility classes and normal CSS in the same project.

---

## 5. 🆚 Tailwind v3 vs Tailwind v4

| Tailwind v3                                            | Tailwind v4                                           |
| ------------------------------------------------------ | ----------------------------------------------------- |
| Uses `tailwind.config.js` for configuration            | Uses CSS-first configuration                          |
| Uses `content` array to define source files            | Automatic source detection                            |
| Uses `@tailwind base`                                  | Uses `@import "tailwindcss"`                          |
| Uses `@tailwind components`                            | Included through the new import system                |
| Uses `@tailwind utilities`                             | Included through the new import system                |
| Custom theme properties are generally configured in JS | Custom theme properties can be defined using `@theme` |
| Uses traditional PostCSS setup                         | Uses `@tailwindcss/postcss`                           |

---

## 6. ⚠️ Important Things to Remember

- Tailwind v4 uses CSS-first configuration.
- We use `@import "tailwindcss"` instead of the old three `@tailwind` directives.
- We use `@theme` to define custom Tailwind theme properties.
- We no longer need a `tailwind.config.js` file for a standard v4 setup.
- Tailwind v4 automatically detects most source files, so we don't normally need the old `content` array.
- Normal CSS can still be written inside the global CSS file.
- Tailwind v3 and v4 have different configuration approaches.

**Additional note:** Tailwind v4 still supports JavaScript configuration files for backward compatibility, but they are not automatically detected. You must explicitly load an existing configuration using the `@config` directive.

---

## 🧠 Final Understanding

Tailwind CSS v4 introduced a CSS-first configuration approach.

Previously, with Tailwind v3, we generally created a separate `tailwind.config.js` file to customize colors, fonts, breakpoints, and other theme properties.

With Tailwind v4, we can define these properties directly inside our CSS file using `@theme`.

The basic setup is:

1. Install Tailwind CSS and its PostCSS plugin.
2. Configure `postcss.config.mjs`.
3. Import Tailwind using `@import "tailwindcss"`.
4. Define custom theme properties using `@theme`.
5. Use the generated utility classes inside JSX.

**The key idea:** Tailwind v4 moves most of its theme configuration from JavaScript into CSS, making customization more direct and keeping the styling configuration in one place.
