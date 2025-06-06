const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`Calculator app listening
at http://localhost:${port}`);
});
