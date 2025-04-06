import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// Types
type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
};

// Mock Data
const users: User[] = [
  { id: 1, name: "Ankit", email: "ankit@example.com" },
  { id: 2, name: "Yogesh", email: "yogesh@example.com" },
];

const posts: Post[] = [
  { id: 1, title: "REST vs GraphQL", content: "Content", userId: 1 },
  { id: 2, title: "Node.js", content: "Best practices", userId: 1 },
  { id: 3, title: "Hello from Amit", content: "Helloo", userId: 2 },
];

// Routes
app.get("/users", (req: Request, res: Response) => res.json(users));

app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find((user: User) => user.id === Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

app.get("/users/:id/posts", (req: Request, res: Response) => {
  const userPosts = posts.filter((post: Post) => post.userId === Number(req.params.id));
  res.json(userPosts);
});

app.post("/posts", (req: Request, res: Response) => {
  const { title, content, userId }: Post = req.body;
  const newPost: Post = {
    id: posts.length + 1,
    title,
    content,
    userId,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(3000, () => {
  console.log("REST API running at http://localhost:3000");
});
