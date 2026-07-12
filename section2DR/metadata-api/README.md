# Metadata API

## What is Metadata?

The Metadata API in Next.js is used to manage the information shown about a webpage, such as the page title, description, icons, Open Graph data, and more.

It helps browsers and search engines understand what a page is about.

---

## Why do we need Metadata?

Without Metadata

```
Browser Tab

↓

Untitled
```

With Metadata

```
Browser Tab

↓

Movie Universe | Popular Movies
```

It also improves SEO and provides better previews when sharing links on social media.

---

## Static Metadata

Metadata can be added using the `metadata` object.

```jsx
export const metadata = {
  title: "Home",
  description: "Welcome to Movie Universe",
};
```

Used when the metadata is the same every time.

---

## Dynamic Metadata

Sometimes the title depends on the current page.

Example

```
/movies/interstellar

↓

Title

Interstellar | Movie Universe
```

This is done using

```jsx
generateMetadata();
```

which generates metadata based on the current route.

---

## Title Template

Instead of writing

```
Home | Movie Universe

About | Movie Universe

Movies | Movie Universe
```

again and again, we can use

```jsx
title: {
    default: "Movie Universe",
    template: "%s | Movie Universe"
}
```

Now every page automatically follows the same format.

---

## Default Title

Used when a page doesn't provide its own title.

Example

```jsx
default: "Movie Universe"
```

If no page title is specified,

Browser Tab

```
Movie Universe
```

---

## Absolute Title

Sometimes we don't want to use the template.

Example

```
404 Not Found
```

instead of

```
404 Not Found | Movie Universe
```

For this we use

```jsx
absolute;
```

which ignores the template completely.

---

## Description

The description tells search engines and social media what the page is about.

Example

```jsx
description: "Browse popular movies, series and anime.";
```

It is mainly used for

- SEO
- Google Search Results
- Link Preview

It is usually not visible directly on the webpage.

---

## My Biggest Confusions

### Description

I thought

> Description changes something on the webpage.

Not true.

It is mainly used by search engines and when sharing links.

---

### Absolute

I thought

> Absolute adds another title.

Actually,

It simply ignores the parent's title template and uses only the title you provide.

---

## Benefits

- Better SEO
- Better Browser Tabs
- Better Social Media Preview
- Dynamic Titles
- Consistent Title Format
- Easier Metadata Management

---

## Final Understanding

The Metadata API in Next.js provides a simple way to manage page information such as titles, descriptions, and other SEO-related data. It supports both static and dynamic metadata, allowing pages to automatically generate information based on the current route. Features like `template`, `default`, and `absolute` help maintain consistent page titles while still allowing exceptions when needed.
