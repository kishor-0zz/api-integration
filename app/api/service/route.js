import { NextResponse } from "next/server"

import services from "../../../lib/data/services/services.json"

export async function GET() {
    return NextResponse.json(services)
}