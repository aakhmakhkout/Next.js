# 🖼️ Image Optimization in Next.js

## 📌 What is Image Optimization?

Image optimization is the process of reducing image size and improving loading performance while maintaining acceptable visual quality.

Images can be large and take more time and bandwidth to load, especially on mobile devices.

Next.js provides a built-in Image component (`next/image`) that helps optimize images automatically.

We can use it instead of the normal HTML `<img>` tag.

---

## 1. 🆚 Normal img vs Next.js Image

In HTML, we normally display images using the `<img>` tag.

**Normal HTML:**

```jsx
<img src="/anime.jpg" alt="Anime" />
```

**Next.js Image:**

```jsx
import Image from "next/image";

<Image src="/anime.jpg" width={500} height={500} alt="Anime" />;
```

### What is the difference?

| Normal `<img>`                            | Next.js `<Image />`                    |
| ----------------------------------------- | -------------------------------------- |
| Loads the original image directly         | Can use built-in image optimization    |
| No automatic image resizing by Next.js    | Can generate different image sizes     |
| No automatic format conversion by Next.js | Can serve modern image formats         |
| Requires manual responsive image handling | Supports responsive image loading      |
| No built-in Next.js lazy loading          | Lazy loads by default in typical cases |

Next.js Image provides additional features to improve image loading and performance.

---

## 2. ⚙️ Image Optimization Using Next.js

Next.js automatically optimizes images when we use its built-in image optimizer.

It can:

- Resize images according to requested dimensions.
- Compress and re-encode images.
- Convert images into suitable formats such as WebP or AVIF, depending on configuration and browser support.
- Generate different image sizes for different screen requirements.
- Lazy-load images by default.

Next.js commonly uses the Sharp library for image processing when installed and configured as the optimization backend.

### Example

```jsx
import Image from "next/image";

export default function Home() {
  return (
    <Image src="/anime.jpg" width={500} height={500} quality={75} alt="Anime" />
  );
}
```

---

## 3. 🎚️ Understanding the Quality Attribute

The `quality` attribute controls the quality of the optimized output.

Its value ranges from 1 to 100.

| Quality | Meaning                                           |
| ------- | ------------------------------------------------- |
| 25      | Lower visual quality, generally smaller file size |
| 50      | Medium quality                                    |
| 75      | Default quality                                   |
| 100     | Highest configured quality                        |

### Important: Does quality 100 disable compression?

No.

Even if we set:

```jsx
quality={100}
```

Next.js can still optimize the image.

It may still:

- Resize the image.
- Re-encode it.
- Convert it into another image format.

Quality 100 means higher output quality, not that all optimization is disabled.

**Next.js 16 note:** The `qualities` configuration controls which quality values are allowed. By default, the allowed value is 75.

To allow quality 100:

```js
// next.config.mjs

const nextConfig = {
  images: {
    qualities: [50, 75, 100],
  },
};

export default nextConfig;
```

---

## 4. 🌐 Using External Image URLs

We can also use images hosted on external websites.

For example:

```jsx
<Image
  src="https://example.com/anime.jpg"
  width={500}
  height={500}
  alt="Anime"
/>
```

However, when using the built-in Next.js optimizer, we need to allow the external image hostname in `next.config.mjs`.

### Example configuration

```js
// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
```

### What is remotePatterns?

`remotePatterns` tells Next.js which external image URLs are allowed to be optimized.

We can also restrict the pathname to specific directories:

```js
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
      pathname: "/images/**",
    },
  ],
},
```

This allows images from the specified hostname and matching path.

### Why did my external image work without configuration?

In my experiment, I used:

```jsx
<Image
  src="https://example.com/anime.jpg"
  width={500}
  height={500}
  alt="Anime"
  unoptimized
/>
```

It worked because I used `unoptimized`.

This disables the built-in Next.js image optimization, so the browser loads the original image URL directly without requiring the hostname to be configured for the built-in optimizer.

### Normal Image vs unoptimized Image

| Method                  | External hostname configuration         | Optimization            |
| ----------------------- | --------------------------------------- | ----------------------- |
| Default `<Image />`     | Required                                | Yes                     |
| `<Image unoptimized />` | Not required for the built-in optimizer | No                      |
| Normal `<img>`          | Not required                            | No Next.js optimization |

---

## 5. 📱 Understanding Device Size Groups

Different devices have different screen sizes.

For example:

- Mobile phones have smaller screens.
- Tablets have medium-sized screens.
- Desktop monitors have larger screens.

Sending the same large image to every device can waste bandwidth.

Next.js solves this by generating multiple image sizes and allowing the browser to select a suitable version.

### How does it work?

```text
       Original Image
             |
             v
      Next.js Optimizer
             |
       +-----+------+
       |     |      |
       v     v      v
     640px  1080px  1920px
       |     |      |
       +-----+------+
             |
             v
          srcset
             |
             v
     Browser selects
     suitable image
```

Next.js uses two important configuration properties:

**1. deviceSizes**

These are width breakpoints intended for responsive images that can occupy a large portion of the viewport.

**2. imageSizes**

These are smaller width options, generally used for images displayed at less than the full viewport width.

Example configuration:

```js
images: {
  deviceSizes: [
    640, 750, 828, 1080,
    1200, 1920, 2048, 3840
  ],

  imageSizes: [
    32, 48, 64, 96,
    128, 256, 384
  ],
},
```

These are the default-style values, not a requirement to configure them manually.

---

## 6. 📐 Understanding the sizes Attribute

The `sizes` attribute tells the browser approximately how much space an image will occupy on the screen.

Example:

```jsx
<Image
  src="/anime.jpg"
  alt="Anime"
  fill
  sizes="(max-width: 768px) 100vw, 300px"
/>
```

Here:

- Below 768px viewport width, the image may occupy the full viewport width.
- Above 768px, it will occupy approximately 300px.

The browser uses this information along with `srcset` to choose an appropriate image.

**Remember:**

- `deviceSizes` defines available image width candidates.
- `sizes` describes the expected display width of an image.

---

## 7. 🔧 What is a Loader?

A loader is a function that generates the image URL used by the Next.js Image component.

Normally, Next.js uses its built-in image optimizer to generate optimized image URLs.

But sometimes we want to use an external image optimization service.

For example, an image CDN might support resizing and compression through URL parameters.

Original image:

```text
https://example.com/anime.jpg
```

Optimized image:

```text
https://example.com/anime.jpg?width=500&quality=75
```

A custom loader can generate this URL.

### Example

```jsx
<Image
  loader={({ src, width, quality }) => {
    return `${src}?width=${width}&quality=${quality || 75}`;
  }}
  src="https://example.com/anime.jpg"
  width={500}
  height={500}
  alt="Anime"
/>
```

### Understanding Loader Props

| Property  | Meaning                 |
| --------- | ----------------------- |
| `src`     | Original image URL      |
| `width`   | Requested image width   |
| `quality` | Requested image quality |

The loader receives these values and generates an image URL.

**Important:** The example only performs actual optimization if the external image server understands these parameters and processes the image accordingly.

A custom loader does not automatically use Sharp or Next.js's built-in optimizer. It generates URLs for an external image service.

### Built-in Optimizer vs Custom Loader

| Built-in optimizer                 | Custom loader                               |
| ---------------------------------- | ------------------------------------------- |
| Next.js handles image optimization | External image service handles optimization |
| Can use Sharp                      | Depends on the external service             |
| Generates optimized image URLs     | Generates external service URLs             |
| No custom loader required          | Requires a loader function                  |

### Why didn't my loader execute?

I initially used:

```jsx
<Image
  loader={({ src, quality, width }) => {
    console.log(src, quality, width);
    return src;
  }}
  src="https://example.com/anime.jpg"
  width={500}
  height={500}
  alt="Anime"
  unoptimized
/>
```

The reason was `unoptimized`.

When optimization is disabled, Next.js bypasses the custom loader because it serves the original image URL directly.

Removing `unoptimized` allows the custom loader to execute when Next.js generates the image URL.

---

## 8. ⚠️ Important Things to Remember

- Use `next/image` instead of normal `<img>` when you want Next.js image optimization features.
- `width` and `height` define image dimensions and help reserve layout space.
- `quality` controls the quality of the optimized output.
- Quality 100 does not disable optimization.
- External image URLs need `remotePatterns` when using the built-in optimizer.
- `unoptimized` disables Next.js image optimization.
- `deviceSizes` and `imageSizes` define available responsive image widths.
- `sizes` helps the browser choose the appropriate image.
- A custom loader generates URLs for an external image optimization service.
- You generally don't need a custom loader when using the built-in optimizer.

---

## 🧠 Final Understanding

Next.js Image provides built-in image optimization features that help improve application performance.

The main concepts covered in this lecture are:

1. Difference between normal `<img>` and Next.js `<Image />`.
2. Image resizing, compression, and format conversion.
3. Using the `quality` attribute.
4. Loading images from external URLs using `remotePatterns`.
5. Disabling optimization using `unoptimized`.
6. Understanding responsive image sizes through `deviceSizes`, `imageSizes`, and `sizes`.
7. Understanding custom loaders and why they are used.

**The key idea:** Next.js Image helps deliver appropriately sized and optimized images to users. Its built-in optimizer handles the processing, while a custom loader allows us to generate URLs for an external image optimization service.
