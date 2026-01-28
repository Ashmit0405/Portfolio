"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteMessageButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this message?");
    if (!confirmed) return;

    setLoading(true);

    await fetch("/api/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setLoading(false);
    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="disabled:opacity-50 relative hover:cursor-pointer inline-flex items-center justify-center h-7 px-3 text-xs rounded bg-yellow-500 text-white hover:bg-yellow-600 w-full sm:w-auto"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
