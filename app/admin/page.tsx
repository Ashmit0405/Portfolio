import Dashboard from "@/components/dashboard";

export default function AdminHomePage() {
  return (
    <Dashboard title="Admin Overview">
      <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-4">
        <h2 className="text-base sm:text-lg font-medium">
          Welcome to the Admin Panel
        </h2>

        <p className="text-sm text-muted-foreground">
          Use the sidebar to manage contact messages and monitor activity.
        </p>
      </div>
    </Dashboard>
  );
}
