"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MarkAsRepliedButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    await fetch("/api/contact", {
      method: "PATCH",
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
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center justify-center h-7 px-3 text-xs rounded bg-yellow-500 text-white hover:bg-yellow-600 hover:cursor-pointer w-full sm:w-auto"
    >
      {loading ? "Updating..." : "Mark as Replied"}
    </button>
  );
}
