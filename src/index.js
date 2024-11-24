const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const bodyParser = require('body-parser');
const app = express();

const { EmailConfig } = require('./config/index');
app.use('/api', apiRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  EmailConfig.sendMail({
    from: ServerConfig.GMAIL_EMAIL,
    to: 'suhaib.text@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email',
  });
});
//sudo npx sequelize db:create
//sudo npx sequelize db:migrate
