import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();

    const result = await resend.emails.send({
      from: "MyTraitBook <hello@effective-exec.com>",
      to: "cary@effective-exec.com",
      subject: "New MyTraitBook Inquiry",
      text: JSON.stringify(body, null, 2),
    });

    console.log(result);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("FULL ERROR START");
    console.dir(error, { depth: null });
    console.error("FULL ERROR END");

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}