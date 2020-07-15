const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const postCharge = require("./stripe");
var cors = require("cors");

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(cors());

const router = express.Router();
const port = process.env.PORT || 7000;
console.log(port);
router.post("/stripe/charge", postCharge);
router.all("*", (_, res) =>
  res.json({ message: "please make a POST request to /stripe/charge" })
);
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
console.log();
app.use(bodyParser.json());
app.use("/api", router);
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.listen(port, () => console.log(`server running on port ${port}`));
