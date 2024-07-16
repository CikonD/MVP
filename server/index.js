const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const {routerUser} = require('./router/UserRoute')
const {routerArt} = require('./router/ArtRoute')





app.use(express.json());
app.use(cors());



app.use(routerUser)
app.use(routerArt)




app.get("/", (req, res) => {
  res.send("Hello from the server!");
});








app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
