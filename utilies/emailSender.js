const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');




const emailSender  = async (email,opt)=> {
var token = jwt.sign({ email: email }, 'bijoy');

    const transporter = nodemailer.createTransport({
                    host: "bijoysaha144@gmail.com",
                    service:"gmail",
                    auth: {
                        user: "bijoysaha144@gmail.com",
                        pass: "bxhheiywveslhjtr",
                    },
                });
                const info = await transporter.sendMail({
                    from: '"Online_Arot" <bijoysaha144@gmail.com>', // sender address
                    to:  email, // list of recipients
                    subject: "Email Verfication", // subject line
                    text: "Hello world?", // plain text body
                    html: `<div style="width:500px;height:400px;background:#0ff;border-radius:10px;padding:20px 40px;text-align:center"><h1>This is Email Verfication</h1><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, iure. Quaerat quam facilis animi iste esse mollitia qui, repellat culpa?</p><a href="http://localhost:5173/otp/${token}/${opt}" style="background-color:red;padding:20px 40px;border-radius:10px;border:0;color:#fff;text-decoration:none;display:inline-block;">Verify</a></div>`, // HTML body
                });
                // 



}
module.exports=emailSender