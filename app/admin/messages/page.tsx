import Dashboard from "@/components/dashboard";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabse_server";
import MarkAsRepliedButton from "@/components/replybutton";
import DeleteMessageButton from "@/components/deletebutton";

async function getMessages() {
  const { data } = await supabaseServer
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <Dashboard title="Contact Messages">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b text-muted-foreground">
            <tr>
              <th className="py-3 text-left px-3">Name</th>
              <th className="text-left hidden sm:table-cell">Email</th>
              <th className="text-left">Message</th>
              <th className="text-left hidden md:table-cell">Date</th>
              <th className="text-left hidden sm:table-cell">Status</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>


          <tbody>
            {messages.map((msg: any) => (
              <tr key={msg.id} className="border-b transition">
                <td className="py-3 font-medium px-3">{msg.name}</td>

                <td className="text-blue-600 hidden sm:table-cell">
                  {msg.email}
                </td>

                <td className="max-w-sm truncate">
                  <Link
                    href={`/admin/messages/${msg.id}`}
                    className="hover:underline"
                  >
                    {msg.message}
                  </Link>

                  <div className="text-xs text-muted-foreground mt-1 md:hidden">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </div>
                </td>

                <td className="text-muted-foreground hidden md:table-cell">
                  {new Date(msg.created_at).toLocaleDateString()}
                </td>

                <td className="hidden sm:table-cell">
                  {msg.replied ? (
                    <span className="text-green-600">Replied</span>
                  ) : (
                    <span className="text-yellow-600">Pending</span>
                  )}
                </td>

                <td className="align-middle">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {!msg.replied && <MarkAsRepliedButton id={msg.id} />}
                    <DeleteMessageButton id={msg.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}
