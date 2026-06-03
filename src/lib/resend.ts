import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  role: string;
  message: string;
}) {
  const {
    firstName,
    lastName,
    email,
    phone,
    institution,
    role,
    message,
  } = data;

  // EMAIL 1 — Send enquiry details to KNEXVORA team
  const teamEmail = await resend.emails.send({
    from: "KNEXVORA Contact <onboarding@resend.dev>",
    to: ["knexvora.support@gmail.com"],
    replyTo: email,
    subject: `New Enquiry — ${firstName} ${lastName} from ${institution}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f3f7; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f3f7; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#00254e; padding: 32px 40px;">
                      <h1 style="margin:0; color:#ffffff; font-size:24px; font-weight:700; letter-spacing:-0.5px;">
                        KNEXVORA
                      </h1>
                      <p style="margin:6px 0 0 0; color:#a9c8fd; font-size:12px; letter-spacing:0.1em; text-transform:uppercase;">
                        New Contact Enquiry Received
                      </p>
                    </td>
                  </tr>

                  <!-- Intro -->
                  <tr>
                    <td style="padding: 32px 40px 0 40px;">
                      <h2 style="margin:0 0 8px 0; color:#00254e; font-size:20px; font-weight:600;">
                        ${firstName} ${lastName}
                      </h2>
                      <p style="margin:0; color:#64748b; font-size:14px;">
                        Submitted a new enquiry via the KNEXVORA website
                      </p>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 24px 40px;">
                      <hr style="border:none; border-top:1px solid #e2e8f0; margin:0;"/>
                    </td>
                  </tr>

                  <!-- Details -->
                  <tr>
                    <td style="padding: 0 40px 32px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">

                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Full Name</span>
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; vertical-align:top;">
                            <span style="font-size:15px; color:#1a1c1f; font-weight:500;">${firstName} ${lastName}</span>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Work Email</span>
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; vertical-align:top;">
                            <a href="mailto:${email}" style="font-size:15px; color:#00254e; text-decoration:none; font-weight:500;">${email}</a>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Phone</span>
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; vertical-align:top;">
                            <a href="tel:${phone}" style="font-size:15px; color:#00254e; text-decoration:none; font-weight:500;">${phone}</a>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Institution</span>
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; vertical-align:top;">
                            <span style="font-size:15px; color:#1a1c1f; font-weight:500;">${institution}</span>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Role</span>
                          </td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f0f5; vertical-align:top;">
                            <span style="font-size:15px; color:#1a1c1f; font-weight:500;">${role}</span>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 12px 0; width:140px; vertical-align:top;">
                            <span style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.08em;">Message</span>
                          </td>
                          <td style="padding: 12px 0; vertical-align:top;">
                            <p style="font-size:15px; color:#1a1c1f; margin:0; line-height:1.6;">${message}</p>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Reply CTA -->
                  <tr>
                    <td style="padding: 0 40px 40px 40px;">
                      <a
                        href="mailto:${email}?subject=Re: Your KNEXVORA Enquiry"
                        style="display:inline-block; background-color:#00254e; color:#ffffff; padding:14px 28px; border-radius:6px; text-decoration:none; font-size:13px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;"
                      >
                        Reply to ${firstName}
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color:#f4f3f7; padding: 24px 40px; border-top: 1px solid #e2e8f0;">
                      <p style="margin:0; font-size:12px; color:#94a3b8; line-height:1.6;">
                        This enquiry was submitted via the KNEXVORA website contact form.<br/>
                        © 2026 KNEXVORA Technologies Pvt. Ltd.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  // EMAIL 2 — Send thank you confirmation to the user
  const userEmail = await resend.emails.send({
    from: "KNEXVORA <onboarding@resend.dev>",
    to: [email],
    subject: `Thank you for reaching out, ${firstName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f3f7; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f3f7; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background-color:#00254e; padding: 32px 40px; text-align:center;">
                      <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:700; letter-spacing:-0.5px;">
                        KNEXVORA
                      </h1>
                      <p style="margin:8px 0 0 0; color:#a9c8fd; font-size:12px; letter-spacing:0.12em; text-transform:uppercase;">
                        University Management System
                      </p>
                    </td>
                  </tr>

                  <!-- Main content -->
                  <tr>
                    <td style="padding: 48px 40px 32px 40px; text-align:center;">
                      <h2 style="margin:0 0 16px 0; color:#00254e; font-size:24px; font-weight:700; line-height:1.3;">
                        Thank you for reaching out, ${firstName}!
                      </h2>
                      <p style="margin:0 0 24px 0; color:#64748b; font-size:16px; line-height:1.7; max-width:460px; margin-left:auto; margin-right:auto;">
                        We have received your enquiry and a member of our team
                        will get back to you within
                        <strong style="color:#00254e;">one business day</strong>.
                      </p>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 0 40px;">
                      <hr style="border:none; border-top:1px solid #e2e8f0; margin:0;"/>
                    </td>
                  </tr>

                  <!-- Enquiry Summary -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <p style="margin:0 0 16px 0; font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.1em;">
                        Your Enquiry Summary
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border-radius:6px; overflow:hidden;">
                        <tr>
                          <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0;">
                            <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:2px;">Institution</span>
                            <span style="font-size:14px; color:#1a1c1f; font-weight:600;">${institution}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 20px; border-bottom:1px solid #e2e8f0;">
                            <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:2px;">Your Role</span>
                            <span style="font-size:14px; color:#1a1c1f; font-weight:600;">${role}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 20px;">
                            <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:2px;">Your Message</span>
                            <span style="font-size:14px; color:#1a1c1f; line-height:1.6;">${message}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- What happens next -->
                  <tr>
                    <td style="padding: 0 40px 40px 40px;">
                      <p style="margin:0 0 16px 0; font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.1em;">
                        What Happens Next
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:10px 0; vertical-align:top; width:32px;">
                            <div style="width:24px; height:24px; background-color:#00254e; border-radius:50%; text-align:center; line-height:24px; color:white; font-size:11px; font-weight:700;">1</div>
                          </td>
                          <td style="padding:10px 0 10px 12px; vertical-align:top;">
                            <p style="margin:0; font-size:14px; color:#1a1c1f; line-height:1.5;">
                              Our team reviews your enquiry and identifies the right specialist for your institution type.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0; vertical-align:top; width:32px;">
                            <div style="width:24px; height:24px; background-color:#00254e; border-radius:50%; text-align:center; line-height:24px; color:white; font-size:11px; font-weight:700;">2</div>
                          </td>
                          <td style="padding:10px 0 10px 12px; vertical-align:top;">
                            <p style="margin:0; font-size:14px; color:#1a1c1f; line-height:1.5;">
                              We reach out to you within one business day to schedule a conversation at your convenience.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0; vertical-align:top; width:32px;">
                            <div style="width:24px; height:24px; background-color:#00254e; border-radius:50%; text-align:center; line-height:24px; color:white; font-size:11px; font-weight:700;">3</div>
                          </td>
                          <td style="padding:10px 0 10px 12px; vertical-align:top;">
                            <p style="margin:0; font-size:14px; color:#1a1c1f; line-height:1.5;">
                              We walk you through a personalised demo of KNEXVORA tailored to your institution's requirements.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- CTA -->
                  <tr>
                    <td style="padding: 0 40px 40px 40px; text-align:center;">
                      <p style="margin:0 0 20px 0; color:#64748b; font-size:14px;">
                        In the meantime, feel free to explore our platform
                      </p>
                      <a
                        href="https://knexvora.com/services"
                        style="display:inline-block; background-color:#00254e; color:#ffffff; padding:14px 32px; border-radius:6px; text-decoration:none; font-size:13px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;"
                      >
                        Explore Platform
                      </a>
                    </td>
                  </tr>

                  <!-- Contact info -->
                  <tr>
                    <td style="background-color:#f4f3f7; padding: 24px 40px; border-top: 1px solid #e2e8f0; text-align:center;">
                      <p style="margin:0 0 8px 0; font-size:13px; color:#64748b;">
                        Need urgent assistance? Email us directly at
                      </p>
                      <a
                        href="mailto:onboarding@knexvora.com"
                        style="font-size:13px; color:#00254e; font-weight:600; text-decoration:none;"
                      >
                        onboarding@knexvora.com
                      </a>
                      <p style="margin:16px 0 0 0; font-size:11px; color:#94a3b8;">
                        © 2026 KNEXVORA Technologies Pvt. Ltd. · Hyderabad, India
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  return { teamEmail, userEmail };
}