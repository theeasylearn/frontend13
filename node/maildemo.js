const nodemailer = require('nodemailer');
/*
https://stackoverflow.com/questions/72626410/how-do-i-send-email-from-nodemailer-in-nodejs-using-gmail
*/
const gmail = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "ankit3385@gmail.com", //sender email address
        pass: "aspzuihkezhozuts"
    }
});
async function send()
{
    let info = await gmail.sendMail(
        {
            from: "ankit3385@gmail.com",
            to: "theeasylearn@gmail.com",
            subject: "testing email from frontend 7 test 2",
            html: "Hello everyone  <br/> Greeting from <b>Ankit Patel </b>"
        }
    )
    //console.log(info);
}

send().catch((error) =>{
    console.log("we got error while sending email");
});