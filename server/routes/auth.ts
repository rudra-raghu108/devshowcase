import { RequestHandler } from "express";
import { LoginCredentials, SignupCredentials, User } from "@shared/types";

// Mock user database
const users: User[] = [
  {
    id: "1",
    email: "demo@example.com",
    name: "Demo User",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    createdAt: new Date().toISOString(),
  },
];

// Mock passwords (in real app, these would be hashed)
const passwords: Record<string, string> = {
  "demo@example.com": "password",
};

export const handleLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password }: LoginCredentials = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = users.find(u => u.email === email);
    const storedPassword = passwords[email];

    if (!user || storedPassword !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleSignup: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, confirmPassword }: SignupCredentials = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    passwords[email] = password;

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleLogout: RequestHandler = (req, res) => {
  // In a real app, you might invalidate tokens here
  res.json({ message: "Logged out successfully" });
};
