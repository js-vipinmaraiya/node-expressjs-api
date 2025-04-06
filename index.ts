// Import Express and types for TypeScript
import express, { Request, Response } from "express";

const app = express();

// Enable JSON parsing for incoming requests
app.use(express.json());

// ========================
// TypeScript Interfaces
// ========================

// Defines the structure of a User object
type User = {
  id: number;
  name: string;
  email: string;
};

// Defines the structure of a Post object
type Post = {
  id: number;
  title: string;
  content: string;
  userId: number; // Foreign key to link the post to a user
};

// ========================
// Mock Data (in-memory storage)
// ========================

const users: User[] = [
  { id: 1, name: "Ankit", email: "ankit@example.com" },
  { id: 2, name: "Yogesh", email: "yogesh@example.com" },
];

const posts: Post[] = [
  { id: 1, title: "REST vs GraphQL", content: "Content", userId: 1 },
  { id: 2, title: "Node.js", content: "Best practices", userId: 1 },
  { id: 3, title: "Hello from Yogesh", content: "Helloo", userId: 2 },
];

// ========================
// API Routes
// ========================

// GET /users - Retrieve all users
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

// GET /users/:id - Retrieve a specific user by ID
app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((user: User) => user.id === Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

// GET /users/:id/posts - Retrieve all posts made by a specific user
app.get("/users/:id/posts", (req: Request, res: Response) => {
  const userPosts = posts.filter((post: Post) => post.userId === Number(req.params.id));
  res.json(userPosts);
});

// POST /posts - Create a new post
app.post("/posts", (req: Request, res: Response) => {
  const { title, content, userId }: Post = req.body;

  // Create a new post object
  const newPost: Post = {
    id: posts.length + 1, // Auto-increment ID
    title,
    content,
    userId,
  };

  // Add the new post to the mock data array
  posts.push(newPost);

  // Return the created post with a 201 Created status
  res.status(201).json(newPost);
});

// ========================
// Start the Server
// ========================

app.listen(3000, () => {
  console.log("REST API running at http://localhost:3000");
});
