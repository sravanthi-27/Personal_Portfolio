// controllers/portfolioController.js

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // your Gmail address
    pass: process.env.EMAIL_PASS    // Gmail App Password (not your actual Gmail password)
  }
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields"
      });
    }

    await transporter.sendMail({
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: "New Message from Portfolio",
      html: `
        <h4>Contact Details</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${msg}</p>
      `
    });

    res.status(200).send({
      success: true,
      message: "Your message was sent successfully!"
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).send({
      success: false,
      message: "Something went wrong while sending the email.",
      error: error.message
    });
  }
};

module.exports = { sendEmailController };
