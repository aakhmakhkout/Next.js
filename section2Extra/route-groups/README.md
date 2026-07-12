## Route Groups

Used **Route Groups** to organize different sections of the application and apply different layouts **without affecting the URL structure**.

One of the challenges I faced was that I wanted the **Home** and **Category** pages to have a shared layout containing the **Navbar** and **Sidebar**, while the **Movie Details** page needed a completely clean layout without those components. If I had kept everything under the same layout, the Navbar and Sidebar would also appear on the details page.

To solve this, I created separate Route Groups with their own `layout.jsx` files. This allowed me to share the Navbar and Sidebar only where needed, while keeping the movie details page independent. The URLs remained clean because Route Group folder names are ignored by Next.js during routing.

### Example

```
app
│
├── (main)
│   ├── layout.jsx        // Navbar + Sidebar
│   ├── page.jsx          // Home
│   └── [showall]
│       └── page.jsx
│
└── (details)
    ├── layout.jsx        // No Navbar or Sidebar
    └── [showall]
        └── [details]
            └── page.jsx
```

This helped me keep the project structure organized while reusing layouts efficiently without changing the application's URL paths.
