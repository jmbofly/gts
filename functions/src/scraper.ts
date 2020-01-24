import * as functions from 'firebase-functions';
import * as express from 'express';;
import * as cors from 'cors';
// import { launch } from 'puppeteer';
// import * as $ from 'cheerio';

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/scrape:goto', (req, res) => {
    // const results: any = {};
    // const goto: string = req.params.goto;
    res.status(200).send(req.params).end();
    // if (res.status(200)) {
    //     async () => {
    //         const browser = await launch();
    //         const page = await browser.newPage();
    //         // const content = await page.content();

    //         try {

    //             await page.goto(goto, { waitUntil: 'networkidle0' }).then(html => {
    //                 $('img').each((idx, el) => {
    //                     results[idx] = { url: $(el).attr()['src'] }
    //                     console.log($(el).attr()['src']);
    //                 })
    //             });

    //             await browser.close();
    //             res.send(results);
    //         }
    //         catch {
    //             throw new functions.https.HttpsError('invalid-argument', 'could not get body')
    //         }
    //     };
    // }
    // res.end();
})

// Expose Express API as a single Cloud Function:
export const scrape = functions.https.onRequest(app);
// // checkURL(gotoURL, Object.keys(data).length);
            // function checkURL(url: string, argsLen: number) {
            //     if (!(typeof url === 'string') || url.length === 0) {
            //         // Throwing an HttpsError so that the client gets the error details.
            //         throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
            //             argsLen + ' arguments, "gotoURL" type must be a string and include "https://".');
            //     }

            // }
