const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "takouahosnysgh@gmail.com",
    pass: "agdr ktyh iaxd kcyz",
  },
});

const mailOptions = {
  from: "takouahosnysgh@gmail.com",
  to: "gmcws2023@gmail.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent using Nodemailer.",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});
