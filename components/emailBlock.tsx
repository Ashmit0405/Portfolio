"use client";

export default function EmailBlock({ email }: { email: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">Email</p>

      <div className="flex items-center gap-3">
        <p className="text-blue-600 font-medium">{email}</p>

        <button
          onClick={() => navigator.clipboard.writeText(email)}
          className="text-xs px-2 py-1 border rounded hover:bg-accent transition hover:cursor-pointer"
        >
          Copy
        </button>

        <a
          href={`mailto:${email}`}
          className="text-xs px-2 py-1 border rounded hover:bg-accent transition hover:cursor-pointer"
        >
          Reply
        </a>
      </div>
    </div>
  );
}
