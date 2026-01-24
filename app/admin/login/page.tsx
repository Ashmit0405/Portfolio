"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setError("Invalid password");
      setLoading(false);
      return;
    }

    router.push("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl border bg-background p-6 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Admin Login
        </h1>

        <label className="block text-sm text-muted-foreground mb-1">
          Admin Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="••••••••"
          required
        />

        {error && (
          <p className="text-sm text-red-600 mb-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary text-primary-foreground py-2 hover:opacity-90 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
