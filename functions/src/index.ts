import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
// import { Mailer } from './mailer';
import { newsletterTemplate as template } from './emailTemp.constant';

admin.initializeApp(functions.config().firebase);
const mainEmail: any = functions.config().main.email;
const mainPassword: any = functions.config().main.password;
const mailTransport: nodemailer.Transporter = nodemailer.createTransport({
    name: 'medtelplus.com',
    host: 'gator3234.hostgator.com',
    port: 465,
    secure: true,
    debug: true,
    auth: {
        user: mainEmail,
        pass: mainPassword,
    },
});

// Company name to include in the emails
const APP_NAME = 'Global Technology Services, LLC';

/**
 * method for sending email to subscriber
 */
exports.sendNewsletterToSubscriber = functions.firestore
    .document(`users/{userIdId}`)
    .onCreate((snap, context) => {
        let user: any;
        if (snap.exists) {
            user = snap.data();
            return sendNewSubscriberEmail(user.email).then(() =>
                sendAdminNotice({ ...user, type: 'Subscriber' })
            );
        } else {
            return null;
        }
    });

async function sendNewSubscriberEmail(email: string) {
    const mailOptions: nodemailer.SendMailOptions = {
        from: `"Global Technology Services" info@medtelplus.com`,
        to: email,
        html: template,
        // attachments: [
        //     {
        //         path: `https://medtelplus.com/assets/images/logo_full.png`,
        //         filename: 'logo_full.png',
        //     },
        //     {
        //         path: `https://medtelplus.com/assets/images/about-bg.jpg`,
        //         filename: 'about-bg.jpg',
        //     },
        // ],
    };

    // The user sent a contact form.
    mailOptions.subject = `Thanks for subscribing to the ${APP_NAME} newsletter!`;
    mailOptions.text = `Hey! Thanks for subscribing! Keep an eye out for your monthly newsletter with tons of great content.`;
    await mailTransport.sendMail(mailOptions);
    console.log('New contact email sent to:', email);
    return null;
}

exports.sendNewContactEmail = functions.firestore
    .document(`contacts/{contactId}`)
    .onCreate((snap, context) => {
        const resource = context.resource;
        const contact: any = snap.data();
        if (snap.exists) {
            return sendWelcomeToContact(
                contact.email,
                contact.name,
                contact.subject
            ).then(() => sendAdminNotice({ ...contact, type: 'Contact' }));
        } else {
            console.log(`failed to send contact email on ${resource}`, snap, context);
            return null;
        }
    });

// Sends a welcome email to the new contact.
async function sendWelcomeToContact(
    email?: string,
    displayName?: string,
    subject?: string
) {
    const mailOptions: nodemailer.SendMailOptions = {
        from: `"Global Technology Services" info@medtelplus.com`,
        to: email,
        html: template,
        // attachments: [
        //     {
        //         path: `https://medtelplus.com/assets/images/about-bg.jpg`,
        //         filename: 'about-bg.jpg',
        //     },
        // ],
    };

    // The user sent a contact form.
    mailOptions.subject = `Thanks for contacting ${APP_NAME}!`;
    mailOptions.text = `Hey ${displayName}! Welcome to ${APP_NAME}. We are responding to your inquiry about ${subject}. `;
    await mailTransport.sendMail(mailOptions);
    console.log('New contact email sent to:', email);
    return null;
}

async function sendAdminNotice(message?: any) {
    const type = message.type;
    const keys = Object.keys(message);
    const body: any = keys.map(val => Object.create(message[val]));
    const mailOptions: nodemailer.SendMailOptions = {
        from: `info@medtelplus.com`,
        to: 'jimi@medtelplus.com',
    };

    // The notice type.
    mailOptions.subject = `New ${type || 'Notification'} added to ${APP_NAME} DB`;
    mailOptions.text = JSON.stringify(body);
    await mailTransport.sendMail(mailOptions);
    console.log('New Notice');
    return null;
}
