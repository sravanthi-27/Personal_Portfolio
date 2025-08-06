# 🌐 Personal Portfolio

Welcome to my **personal portfolio website** built with the **MERN Stack** (MongoDB, Express, React, Node.js).  
It showcases my work, skills, and includes a contact form that sends emails directly to me using **Nodemailer**.

---

## 🚀 Live Site

🔗 [View Live Portfolio](https://bindu-sravanthi-portfolio.onrender.com/)  

---

## 🧰 Tech Stack

- **Frontend**: React.js, HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Email Service**: Nodemailer (Gmail App Password)  
- **Deployment**: Render (Full-Stack App)

---

## 📱 Mobile View

<img src="<img width="540" height="1206" alt="image" src="https://github.com/user-attachments/assets/6809a0d4-3843-44c8-a69b-af945bdb9aac" />
" alt="Mobile view" width="300"/>

---

## 💻 Desktop View

<img src="<img width="1915" height="963" alt="Screenshot 2025-08-07 035618" src="https://github.com/user-attachments/assets/143fe376-fffc-4258-91ac-5134c1f7037b" />
" alt="Desktop view" width="700"/>

---

## ✨ Features

- Responsive design for all screen sizes
- Contact form with working email functionality
- Sections:
  - Home
  - About
  - Education
  - Tech Stack
  - Projects
  - Internships
  - Contact

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/sravanthi-27/Personal_Portfolio.git
cd Personal_Portfolio

## 2. Backend Setup

npm install

## 3. Frontend Setup

cd client
npm install
npm run build
cd ..


## 4. Environment Variables

Create a .env file in the root directory and add:

EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production

💡 Use Gmail App Passwords instead of your actual password.

## 5. Start the Server

node server.js


📁 Folder Structure

Personal_Portfolio/
├── client/              # React frontend
├── controllers/         # Nodemailer logic
├── routes/              # API routes (email)
├── .env                 # Environment config
├── server.js            # Express backend


🧠 Notes
Works well on both desktop and mobile

Secure email using environment variables

Fully deployable to services like Render or Vercel (static frontend)

📬 Contact
If you want to collaborate or reach out, feel free to use the Contact Form on the live site!
