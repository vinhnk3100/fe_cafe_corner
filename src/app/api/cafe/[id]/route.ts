import { CafeSchema } from "@/schemas/cafe.schema";
import { getCafes, writeCafes } from "@/utils/cafe.utils";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const cafes = getCafes();
    const cafeIndex = cafes.findIndex((x) => x.id === params.id);
    if (cafeIndex === -1) {
      return NextResponse.json({ error: "Cafe not found" }, { status: 404 });
    }

    // Validate Request Body
    const validatedDate = CafeSchema.parse({
      ...body,
      id: params.id,
    });

    cafes[cafeIndex] = validatedDate;
    writeCafes(cafes);

    return NextResponse.json(validatedDate, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update cafe" },
      { status: 400 }
    );
  }
}

// export async function DELETE({ params }: { params: { id: string } }) {
//     try {
//         const cafes = getCafes();
//         const cafeIndex = cafes.findIndex((x) => x.id === params.id);
//         if (cafeIndex === -1) {
//             return NextResponse.json({ error: "Cafe not found" }, { status: 404 });
//         }
//         cafes.splice(cafeIndex, 1);
//         writeCafes(cafes);

//         return NextResponse.json({ message: "Cafe deleted successfully" }, { status: 200 });
//     } catch (error) {
//         if (error instanceof Error) {
//             return NextResponse.json({ error: error.message }, { status: 400 });
//         }
//         return NextResponse.json({ error: "Failed to delete cafe" }, { status: 400 });
//     }
// }