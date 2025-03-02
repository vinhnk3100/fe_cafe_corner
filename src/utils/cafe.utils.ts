import { Cafe } from "@/schemas/cafe.schema";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

export const getCafes = (): Cafe[] => {
  const filePath = path.join(process.cwd(), "src/constants/cafe.data.json");
  const cafes = JSON.parse(readFileSync(filePath, "utf-8"));
  return cafes;
};

export const writeCafes = (cafes: Cafe[]) => {
  const filePath = path.join(process.cwd(), "src/constants/cafe.data.json");
  writeFileSync(filePath, JSON.stringify(cafes, null, 2));
};

