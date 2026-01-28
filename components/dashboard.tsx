"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard({ title, children }: any) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-muted flex">
      <aside className="w-64 bg-background border-r flex flex-col">
        <div className="p-4 font-semibold">Admin</div>

        <nav className="px-4 space-y-1 text-sm flex-1">
          <Link
            href="/admin"
            className="block rounded px-3 py-2 hover:bg-accent"
          >
            Overview
          </Link>

          <Link
            href="/admin/messages"
            className="block px-3 py-2 hover:bg-accent"
          >
            Messages
          </Link>
        </nav>

        <button
          onClick={logout}
          className="m-4 rounded border px-3 py-2 text-sm hover:bg-red-500 hover:cursor-pointer"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <div className="bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}
