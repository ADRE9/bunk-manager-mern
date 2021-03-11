const nodemailer = require('nodemailer');

module.exports = class Email {
    constructor(user) {
        this.to = user.email;
        this.name = user.name;
        this.from = `Bunk Manager Team`;
    }

    newTransport() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
            //activate in gmail "less secure app" option
        });
    }

    async send(template, subject) {

        // 1) define the email options
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            text: `Hello ${this.name}. We welcome you to the Bunk Manager Family.`
        }; 

        // 2) create a transport and send email
        await this.newTransport().sendMail(mailOptions, (err,data) => {
            if(err) console.log(err);
            else console.log('Email sent successfully');
        });
    }

    async sendWelcome() {
        await this.send('Welcome', 'Welcome to Bunk Manager!');
    };
};