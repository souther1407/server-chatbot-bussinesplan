import app from "./app.js";
import config from "./config/config.js";

app.listen(config.base.port, () => {
  console.log("listening port", config.base.port);
});
