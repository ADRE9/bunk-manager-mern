const nodemailer = require("nodemailer");

const email = (name, mail, department, roles, regdid) => {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adrenine13@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    //activate in gmail "less secure app" option
  });

  const send = async (subject) => {
    // 1) define the email options
    const mailOptions = {
      from: "adrenine13@gmail.com",
      to: mail,
      subject,
      text: `Hello ${this.name}.\nWe welcome you to the Bunk Manager Family.\n\nBunk Manager is an Attendace Management App which will help students and class representatives balance their attendance and manage it efficiently.\n\nYour account details are:\n
            Name: ${name}\nId: ${regdid}\nRole: ${role}\nEmail: ${mail}\nDepartment: ${department}\n\nWe’d love to hear what you think of Bunk Manager and if there is anything we can improve. If you have any questions, please reply to this email. We're always happy to help!\n\nBunk Manager Team`,
    };

    // 2) create a transport and send email
    await mailTransporter.sendMail(mailOptions, (err, data) => {
      if (err) console.log(err);
      else console.log("Email sent successfully");
    });
  };

  //For sending welcome email anytime a new user sign up
  const sendWelcome = async () => {
    // Relevant subject is added here
    await send("Welcome to Bunk Manager!");
  };

  //We can use this same function for more emails too
};

module.exports = email;
