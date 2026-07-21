# Parallel Data Fetching using `Promise.all()`

## What is Parallel Data Fetching?

Parallel Data Fetching means fetching multiple independent API requests at the same time instead of waiting for one request to finish before starting the next.

Next.js allows us to do this using JavaScript's built-in

```jsx
Promise.all();
```

This significantly reduces the total waiting time when multiple APIs are needed.

---

## The Problem

Suppose our page needs data from three APIs.

- Posts API
- Users API
- Comments API

If we fetch them one after another, the page has to wait for every request to complete.

---

## Method 1: Sequential Data Fetching

```jsx
const posts = await fetchPosts();

const users = await fetchUsers();

const comments = await fetchComments();
```

### Rendering Flow

```
Posts API

↓

5 sec

↓

Users API

↓

10 sec

↓

Comments API

↓

7 sec

↓

Render Page
```

### Total Time

```
5 + 10 + 7

=

22 seconds
```

Each request waits for the previous one.

This is the slowest approach.

---

## Method 2: Suspense

Instead of fetching everything inside one component,

we divide the page into smaller components.

Example

```
Page

├── Header
├── Posts
├── Users
└── Comments
```

Each component fetches its own data.

Then we wrap those components with

```jsx
<Suspense fallback={<Loading />}>
    <Posts />
</Suspense>

<Suspense fallback={<Loading />}>
    <Users />
</Suspense>

<Suspense fallback={<Loading />}>
    <Comments />
</Suspense>
```

### Rendering Flow

```
Header

↓

Visible

Posts

↓

Loading...

↓

Visible

Users

↓

Loading...

↓

Visible

Comments

↓

Loading...

↓

Visible
```

### What I Learned

Suspense improves the **loading experience**.

Instead of making the whole page wait,

different parts of the page become visible as soon as they are ready.

However,

Suspense itself is **not a parallel fetching method**.

Its purpose is to provide **component-level loading**.

---

## Method 3: Parallel Data Fetching

Instead of waiting for every request,

we start all requests together.

```jsx
const [posts, users, comments] = await Promise.all([
  fetchPosts(),
  fetchUsers(),
  fetchComments(),
]);
```

### Rendering Flow

```
Posts API

5 sec

↘

Users API

10 sec

↘

Comments API

7 sec

↓

All Finished

↓

Render Page
```

### Total Time

```
Longest API Time

=

10 seconds
```

Instead of adding every request time together,

we only wait for the slowest request.

---

## Why is Promise.all() Faster?

Suppose

```
API 1 = 5 sec

API 2 = 10 sec

API 3 = 7 sec
```

### Sequential

```
5

+

10

+

7

=

22 sec
```

---

### Parallel

```
max(

5,

10,

7

)

=

10 sec
```

All APIs start together,

so the total waiting time becomes approximately the longest request.

---

## Using fetch()

Normally

```jsx
const responses = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
```

This returns

```
[
    Response,
    Response,
    Response
]
```

We still need to convert them into JSON.

One way is

```jsx
const data = await Promise.all(responses.map((res) => res.json()));
```

---

## Cleaner Approach

Instead of using `Promise.all()` twice,

we can create a helper function.

```jsx
async function getData(url) {
  const response = await fetch(url);

  return response.json();
}
```

Now

```jsx
const [posts, users, comments] = await Promise.all([
  getData(postsUrl),
  getData(usersUrl),
  getData(commentsUrl),
]);
```

Now only one `Promise.all()` is needed.

This is cleaner and easier to read.

---

## Sequential vs Suspense vs Parallel

### Sequential

```
API 1

↓

API 2

↓

API 3

↓

Render
```

✔ Simple

✖ Slow

---

### Suspense

```
Page

↓

Header

↓

Visible

Posts

↓

Loading...

↓

Visible

Users

↓

Loading...

↓

Visible
```

✔ Better user experience

✔ Component-level loading

✖ Not designed to reduce total fetch time

---

### Parallel

```
API 1

↘

API 2

↘

API 3

↓

Render
```

✔ Fastest

✔ Ideal for independent API requests

✔ Waits only for the slowest request

---

## When Should I Use Promise.all()?

Use `Promise.all()` when

- Multiple APIs are independent.
- One API does not rely on another.
- You want to reduce the total waiting time.

Do **not** use it when

- One request depends on the result of another request.

Example

```
Login

↓

Get User ID

↓

Fetch User Details
```

Here the requests are dependent,

so sequential fetching is required.

---

## Things I Learned

- `Promise.all()` starts all API requests simultaneously.
- Total waiting time becomes approximately the longest request.
- Sequential fetching waits for every request one after another.
- Suspense improves the loading experience but is not a parallel fetching technique.
- `fetch()` returns a `Response` object, not the actual data.
- We can either use `Promise.all()` again with `response.json()` or create a helper function that directly returns JSON.
- Using a helper function makes the code cleaner because only one `Promise.all()` is needed.

---

## Final Understanding

When multiple independent API requests are required, there are three common approaches. Sequential fetching executes requests one after another, making the total loading time equal to the sum of all request times. Suspense improves the user experience by allowing different components to display independently with their own loading UI, but it is not a technique for parallel fetching. Parallel Data Fetching with `Promise.all()` starts all requests simultaneously, reducing the total waiting time to approximately the duration of the slowest request. This makes `Promise.all()` the preferred approach for fetching multiple independent APIs efficiently.
