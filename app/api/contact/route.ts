import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabse_server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }
        const { error } = await supabaseServer.from("contact_messages").insert([{
            name,
            email,
            message
        }]);
        if (error) {
            return NextResponse.json({ error: "Failed to save the message" }, { status: 500 });
        }
        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 400 }
        );
    }
}
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Message id is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseServer
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Message not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Message id is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("contact_messages")
      .update({ replied: true })
      .eq("id", id)
      .select()
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Failed to update message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Marked as replied", data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Message id is required" },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to delete message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
