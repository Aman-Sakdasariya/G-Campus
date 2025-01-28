import emailjs from "emailjs-com";
import generateRandomNumber from "../utils/generateRandomNumber";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export function sendEmail(emailData) {
  const templateId = "template_6250k94"; // Update this based on your template
  const userId = "9YkFPSb_OX1MAS2zn";

  const data = {
    to_email: emailData.to_email,
    message: "Test message or dynamic content", // Replace or set dynamically if needed
  };

  emailjs
    .send("service_6250k94", templateId, data, userId)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error.message);
    });
}

export async function sendOTP(emailData) {
  if (!emailData.to_email || !isValidEmail(emailData.to_email)) {
    console.error("Invalid email address");
    throw new Error("Please provide a valid email address");
  }

  try {
    const templateId = "template_6250k94"; // Correct template ID
    const userId = "9YkFPSb_OX1MAS2zn";

    const otp = generateRandomNumber(6).toString();
    const data = {
      to_email: emailData.to_email,
      message: otp,
    };

    await emailjs.send("service_6nsveb8", templateId, data, userId);
    return otp;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP. Please try again later.");
  }
}
