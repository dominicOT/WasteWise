const express = require('express');
const twilio = require('twilio');
const app = express();
app.use(express.json());

app.post('/send-sms', (req, res) => {
  const { accountSid, authToken, to, body } = req.body;

  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: body,
      from: '+12762764955',
      to: to,
    })
    .then(message => {
      console.log(message.sid);
      res.json({ message: 'SMS sent successfully', sid: message.sid });
    })
    .catch(error => {
      console.error("Error sending SMS:", error);
      res.status(500).json({ message: error.message }); 
    });
});

