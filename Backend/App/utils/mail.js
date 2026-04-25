import nodemailer from "nodemailer";

const sendMail = async (email, subject, tamplate) => {
    try {
        const config = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            }
        });
        const options = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: subject,
            html: tamplate
        };

        await config.sendMail(options);
        return {
            success: true,
            message: "Email sent successfully"
        };

    } catch (error) {
        console.log(error)
        return false
    }
};

export default sendMail;