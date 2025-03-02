import { CafeSchema } from "@/schemas/cafe.schema";
import { getCafes, writeCafes } from "@/utils/cafe.utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cafes = getCafes();
    return NextResponse.json(cafes);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = CafeSchema.parse({
      ...body,
      id: crypto.randomUUID(),
    });

    const cafes = getCafes();
    cafes.push(validatedData);
    writeCafes(cafes);

    return NextResponse.json(validatedData, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 400 }
    );
  }
}
