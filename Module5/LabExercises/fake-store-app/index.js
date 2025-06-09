const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`Fake store app listening
at http://localhost:${port}`);
});
