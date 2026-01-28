import Dashboard from "@/components/dashboard";
import EmailBlock from "@/components/emailBlock";
async function getMessageById(id: string) {
  const res=await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact?id=${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data=await res.json();
  if(!res.ok){
    throw new Error(data.error || "Failed to fetch message");
  }
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    message: data.message,
    createdAt: data.created_at,
    replied: data.replied
  }
}

export default async function MessageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const message = await getMessageById(id);

  return (
    <Dashboard title="Message Details">
      <div className="p-6 space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="text-lg font-medium">{message.name}</p>
        </div>

         <EmailBlock email={message.email} />

        <div>
          <p className="text-sm text-muted-foreground">Message</p>
          <div className="mt-2 rounded-lg border bg-muted p-4 whitespace-pre-wrap">
            {message.message}
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Received on{" "}
          {new Date(message.createdAt).toLocaleString()}
        </div>
      </div>
    </Dashboard>
  );
}
