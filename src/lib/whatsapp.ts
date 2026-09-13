// WhatsApp Cloud API (Meta) client. Sends business-initiated messages from
// the platform's WhatsApp number (+91 70206 61030) using the phone number ID
// and access token issued in the Meta for Developers dashboard.
//
// Note: Meta requires business-initiated messages (like these) to use a
// pre-approved message template once a user's 24-hour session window has
// closed. The plain-text send below works while templates are being
// approved / in testing; swap the request body for a "template" type
// message (see Meta's Cloud API docs) once your templates are approved.

const GRAPH_API_VERSION = process.env.WHATSAPP_API_VERSION ?? "v21.0";

function toWhatsAppNumber(mobile: string): string {
  const digits = mobile.replace(/\D/g, "");
  return digits.startsWith("91") ? digits : `91${digits}`;
}

async function sendWhatsAppText(to: string, body: string): Promise<void> {
  const { WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID } = process.env;

  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    console.warn("WhatsApp is not configured (missing env vars); skipping message to", to);
    return;
  }

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: toWhatsAppNumber(to),
        type: "text",
        text: { body },
      }),
    }
  );

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    console.error(`WhatsApp API error (${res.status}) sending to ${to}: ${errorBody}`);
  }
}

export async function sendRegistrationWelcomeMessage(user: {
  name: string;
  mobile: string;
}): Promise<void> {
  try {
    await sendWhatsAppText(
      user.mobile,
      `Hi ${user.name}, welcome to RTO Quiz! Your account has been created successfully. ` +
        `You can now attempt free questions daily. Good luck with your preparation!`
    );
  } catch (err) {
    console.error("Failed to send WhatsApp welcome message:", err);
  }
}

export async function sendMissedDailyQuizReminder(user: {
  name: string;
  mobile: string;
}): Promise<void> {
  try {
    await sendWhatsAppText(
      user.mobile,
      `Hi ${user.name}, you have missed today's quiz on RTO Quiz. ` +
        `Don't miss today's quiz - open the app and attempt it now!`
    );
  } catch (err) {
    console.error("Failed to send WhatsApp reminder message:", err);
  }
}
