"use server";

import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  try {
    // Validate API Key
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OPENAI_API_KEY is not set" }),
        { status: 500 }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    const messages = body.messages as Message[];

    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400 }
      );
    }

    // Validate message format
    const isValidMessage = messages.every(
      (message) =>
        message.role &&
        ["user", "assistant"].includes(message.role) &&
        typeof message.content === "string"
    );
    if (!isValidMessage) {
      return new Response(JSON.stringify({ error: "Invalid message format" }), {
        status: 400,
      });
    }

    // Stream response
    const response = streamText({
      model: openai("gpt-4o-mini"),
      system:
        "You are a helpful assistant that can answer questions and help with tasks.",
      messages,
      temperature: 0.7,
    });

    // Return stream response
    return response.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
