import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            firstName,
            lastName,
            email,
            phone = "",
            institution,
            role = "Other",
            message = "",
        } = body;

        if (!firstName || !lastName || !email || !institution) {
            return NextResponse.json(
                { error: "Missing required fields: firstName, lastName, email, institution" },
                { status: 400 }
            );
        }

        const result = await sendContactEmail({
            firstName,
            lastName,
            email,
            phone,
            institution,
            role,
            message,
        });

        console.log("Resend team email response:", JSON.stringify(result.teamEmail));
        console.log("Resend user email response:", JSON.stringify(result.userEmail));

        // The team notification is critical — if it fails, return an error.
        // The user confirmation email may fail on the Resend free plan (can only
        // send to the account owner email). That's a best-effort send; we still
        // return success to the client as long as the team was notified.
        if (result.teamEmail.error) {
            console.error("Team email failed:", result.teamEmail.error);
            return NextResponse.json(
                { error: "Failed to deliver enquiry to team", detail: result.teamEmail.error },
                { status: 502 }
            );
        }

        if (result.userEmail.error) {
            // Log but do not fail — Resend free plan limitation
            console.warn(
                "User confirmation email could not be sent (Resend free-plan restriction):",
                result.userEmail.error.message
            );
        }

        return NextResponse.json(
            { success: true, message: "Enquiry sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send enquiry", detail: String(error) },
            { status: 500 }
        );
    }
}
