# React - Client Side Rendering (CSR)

## What is CSR?

Client Side Rendering (CSR) is the rendering strategy used by React by default.

The browser downloads the JavaScript first, then React executes the code inside the browser and creates the HTML.

---

## Rendering Flow

```
User visits Website

↓

Browser requests files

↓

Server sends

- index.html
- CSS
- JavaScript

↓

Browser downloads JS

↓

React executes

↓

HTML is created

↓

Webpage becomes visible
```

---

## How React works

Initially, React only receives

```html
<div id="root"></div>
```

Then

```jsx
main.jsx;
```

mounts the application

```jsx
createRoot(document.getElementById("root")).render(<App />);
```

From there React renders every component inside the browser.

---

## Advantages

- Highly Interactive
- Fast page navigation after first load
- Great for Dashboards
- Rich UI

---

## Disadvantages

- Initial loading can be slower
- Browser must download JavaScript first
- SEO is weaker compared to SSR
- Blank page until JavaScript executes

---

## Final Understanding

React uses Client Side Rendering by default. The server only sends the HTML shell and JavaScript files. The browser downloads the JavaScript, executes React, creates the HTML, and displays the webpage. Almost all rendering happens inside the browser.
