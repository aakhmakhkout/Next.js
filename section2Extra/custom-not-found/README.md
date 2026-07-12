## Custom Not Found Page

Implemented a custom `not-found.jsx` page to handle invalid routes and improve the user experience instead of showing the default Next.js 404 page.

I used `notFound()` from `next/navigation` to manually redirect users whenever an invalid category, movie, or dynamic URL was accessed. For example, if a user entered a movie name or category that didn't exist in my data, the page automatically displayed the custom 404 page.

This helped me understand how Next.js handles invalid dynamic routes and how custom error pages can be integrated into the App Router.

### Example

```jsx
import { notFound } from "next/navigation";

if (!movie) {
  notFound();
}
```

Examples

```
/popularmovies/interstellar      ✅ Valid

/popularmovies/randommovie       ❌ Custom 404

/anime/xyz                       ❌ Custom 404
```
