import { NextResponse } from "next/server";

export const upbaseError = (message: string, status: number) => {
  return NextResponse.json(
    { error: message, success: false, timestamp: new Date().toISOString() },
    { status },
  );
};
