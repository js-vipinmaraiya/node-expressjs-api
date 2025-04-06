```markdown
# Simple REST API with Express and TypeScript

This is a simple mock REST API built using Express and TypeScript. It demonstrates basic CRUD operations for `users` and `posts`.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.14.0
- npm or yarn

### Installation

```bash
npm install
```

or

```bash
yarn
```

### Running the Server

```bash
npm run start
```

or

```bash
yarn start
```

Server will run at:  
**http://localhost:3000**

---

## 📁 API Endpoints

### Get all users

**GET** `/users`

Returns a list of all users.

#### Example Response

```json
[
  {
    "id": 1,
    "name": "Ankit",
    "email": "ankit@example.com"
  },
  {
    "id": 2,
    "name": "Yogesh",
    "email": "yogesh@example.com"
  }
]
```

---

### Get user by ID

**GET** `/users/:id`

Returns a single user based on the given ID.

#### Example

`GET /users/1`

---

### Get posts by user ID

**GET** `/users/:id/posts`

Returns all posts created by a specific user.

#### Example

`GET /users/1/posts`

---

### Create a new post

**POST** `/posts`

Create a new post associated with a user.

#### Request Body

```json
{
  "title": "My new post",
  "content": "This is the content",
  "userId": 1
}
```

#### Response

```json
{
  "id": 4,
  "title": "My new post",
  "content": "This is the content",
  "userId": 1
}
```

---

## 🧪 Mock Data

### Users

```ts
const users = [
  { id: 1, name: "Ankit", email: "ankit@example.com" },
  { id: 2, name: "Yogesh", email: "yogesh@example.com" }
];
```

### Posts

```ts
const posts = [
  { id: 1, title: "REST vs GraphQL", content: "Content", userId: 1 },
  { id: 2, title: "Node.js", content: "Best practices", userId: 1 },
  { id: 3, title: "Hello from Amit", content: "Helloo", userId: 2 }
];
```

---

## 🛠️ Built With

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).
```

---

Let me know if you want to include setup scripts or want to convert this into a full-featured project with ESLint, Prettier, or testing setup!
