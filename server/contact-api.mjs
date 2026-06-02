import http from "node:http";
import nodemailer from "nodemailer";

const {
  CONTACT_PORT = "3031",
  SMTP_HOST = "smtp.titan.email",
  SMTP_PORT = "465",
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO = "it@yoursoftdigital.ca",
  MAIL_FROM = "contact@yoursoftdigital.ca"
} = process.env;

if (!SMTP_USER || !SMTP_PASS) {
  throw new Error("SMTP_USER and SMTP_PASS are required");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

const readJson = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 24_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    request.on("error", reject);
  });

const clean = (value) => String(value || "").replace(/\s+/g, " ").trim().slice(0, 1200);
const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
};

const server = http.createServer(async (request, response) => {
  if (request.method !== "POST" || request.url !== "/api/contact") {
    sendJson(response, 404, { message: "Not found" });
    return;
  }

  try {
    const payload = await readJson(request);
    const name = clean(payload.name);
    const email = clean(payload.email);
    const phone = clean(payload.phone);
    const interest = clean(payload.interest);
    const details = clean(payload.details);

    if (!name || !email || !details) {
      sendJson(response, 400, { message: "Name, email, and project details are required." });
      return;
    }

    await transporter.sendMail({
      from: `Yoursoft Digital Contact <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: `Website contact form: ${interest || "New inquiry"}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Interest: ${interest || "Not provided"}`,
        "",
        "Project details:",
        details
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Interest:</strong> ${escapeHtml(interest || "Not provided")}</p>
        <p><strong>Project details:</strong></p>
        <p>${escapeHtml(details)}</p>
      `
    });

    sendJson(response, 200, { message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { message: "Message could not be sent. Please try again." });
  }
});

server.listen(Number(CONTACT_PORT), "127.0.0.1", () => {
  console.log(`Contact API listening on 127.0.0.1:${CONTACT_PORT}`);
});
