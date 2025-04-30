const express = require("express");
const app = express();

app.use(bot.webhookCallback("/bot" + process.env.BOT_TOKEN));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot running on port ${PORT}`);
});
