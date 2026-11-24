import db from "@/lib/db";

export async function GET() {
    try {
        const [rows] = await db.execute(
            "SELECT id, skill, description FROM Competency ORDER BY skill ASC"
        );
        return Response.json(rows);
    } catch (err) {
        return Response.json({error: "Failed to fetch competencies."},
            {status: 500}
        );
    }
}