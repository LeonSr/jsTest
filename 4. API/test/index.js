import express from "express";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use(express.static("public"));

app.set("view engine","ejs");


app.get("/", (req, res) => {
  res.render(path.join(__dirname, "index"),{
    sina: "sina" , rasooli : "rasooli"
  });
});

app.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});