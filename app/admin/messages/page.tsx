import Dashboard from "@/components/dashboard";
import Link from "next/link";

function getMessages() {
  return [
    {
      id: "1",
      name: "Ashmit",
      email: "ashmit@gmail.com",
      message: "Loved your portfolio, would like to connect.",
      createdAt: new Date().toISOString(),
      replied: false,
    },
  ];
}

export default function AdminMessagesPage() {
  const messages = getMessages();

  return (
    <Dashboard title="Contact Messages">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-muted-foreground">
            <tr>
              <th className="py-3 text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Message</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className="border-b hover:bg-accent transition"
              >
                <td className="py-3 font-medium">{msg.name}</td>

                <td className="text-blue-600">
                  {msg.email}
                </td>

                <td className="max-w-sm truncate">
                  <Link
                    href={`/admin/messages/${msg.id}`}
                    className="hover:underline"
                  >
                    {msg.message}
                  </Link>
                </td>

                <td className="text-muted-foreground">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>

                <td>
                  {msg.replied ? (
                    <span className="text-green-600">Replied</span>
                  ) : (
                    <span className="text-yellow-600">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}
