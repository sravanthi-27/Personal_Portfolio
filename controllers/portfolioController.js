// controllers/portfolioController.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Gmail transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS  // your Gmail App Password
  }
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields"
      });
    }

    // send mail
    await transporter.sendMail({
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Contact Details</h5>
        <ul>
          <li><strong>Name:</strong> ${name}</li> <br/>
          <li><strong>Email:</strong> ${email}</li> <br/>
          <li><strong>Message:</strong> ${msg}</li> <br/>
        </ul>
      `
    });

    res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully"
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error: error.message
    });
  }
};

module.exports = { sendEmailController };
