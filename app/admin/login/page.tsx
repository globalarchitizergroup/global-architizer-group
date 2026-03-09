"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/admin/dashboard/projects");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-[#111] p-10 rounded-xl w-[400px]"
      >
        <h1 className="text-2xl mb-6 font-semibold">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 bg-[#1a1a1a] rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-[#1a1a1a] rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#E0B973] text-black py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
