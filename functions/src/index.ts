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

/** * 
 * method for sending email to verify prize-drawing entry 
 */
exports.sendEntryEmail = functions.firestore
.document('prize-entries/{entryId}')
.onCreate((snap, context) => {
    let user: any;
    if (snap.exists) {
        user = snap.data();
        return sendNewEntryEmail(user.email, user.name).then(() =>
                sendAdminNotice({ ...user, type: 'Prize Entry' })
            );
    } else {
        return null;
    }
})

async function sendNewEntryEmail(email: string, name: string) {
    const mailOptions: nodemailer.SendMailOptions = {
        from: `"Global Technology Services, LLC" info@medtelplus.com`,
        to: email,
        html: `Hey, ${name}!<br/><br/><br/>Thanks for your entry!<br/> Remember, sign-up or purchase from featured partner is required to win.<br/>Purchase/Signup must be done <b>within 7 days</b> of submitting entry.<br/>  GTS will automatically verify sign-up and/or purchase with featured partner.<br/><br/>GOOD LUCK!<br/><br/><br/><a href="https://trygts.com"><img src="https://trygts.com/assets/img/gts_logo_alt_short_2.png"></img></a><br/>Global Technology Services, LLC<br/>Digital Marketing and Sales`
    };

    // The user submitted entry.
    mailOptions.subject = `You're entered into ${APP_NAME} prize drawing!`;
    // mailOptions.text = `Hey, ${name}! Thanks for your entry!<br/> Remember, sign-up or purchase from featured partner is required to win.<br/>Purchase/Signup must be done <b>within 7 days</b> of submitting entry.<br/>  GTS will automatically verify sign-up and/or purchase with featured partner.<br/> GOOD LUCK!`;
    await mailTransport.sendMail(mailOptions);
    console.log('New entry email sent to:', email);
    return null;
}


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
        from: `"Global Technology Services, LLC" info@medtelplus.com`,
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

    // The user subscribed.
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
        from: `"Global Technology Services, LLC" info@medtelplus.com`,
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
        from: `"GTS ADMIN NOTICE" info@medtelplus.com`,
        to: 'jimi@medtelplus.com',
    };

    // The notice type.
    mailOptions.subject = `New ${type || 'Notification'} added to ${APP_NAME} DB`;
    mailOptions.text = JSON.stringify(body);
    await mailTransport.sendMail(mailOptions);
    console.log('New Notice');
    return null;
}
