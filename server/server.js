const app = require("./app");
const colors = require("colors");

app.listen(9000, () => {
  console.log(
    colors.bgGreen.black(`Server is running on http://localhost:9000`)
  );
});
