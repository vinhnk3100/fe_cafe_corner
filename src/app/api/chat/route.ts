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
    if (!process.env.OPENAI_API_KEY) {
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
      system: `You are an assistant specializing in providing information about cafés in Ho Chi Minh City. 
        Only answer questions related to cafés, such as names, addresses, styles, reviews, and menus. 
        If you are unsure of an address, respond with: "I'm not sure about the exact address. Please check official sources like Google Maps or Foody.vn."
        Do not make up any information or guess addresses.`,
      messages,
      temperature: 0,
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
