import Dashboard from "@/components/dashboard";
import EmailBlock from "@/components/emailBlock";
function getMessageById(id: string) {
  return {
    id,
    name: "Ashmit",
    email: "ashmit@gmail.com",
    message:
      "Hi, I really liked your portfolio and wanted to discuss a potential opportunity.",
    createdAt: new Date().toISOString(),
  };
}

export default async function MessageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
  const message = getMessageById(id);

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
