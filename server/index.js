import { Connect, DB } from "./utils/connect.js";
import Express from "express";
import cors from "cors";
const connect = new Connect();
const PORT = process.env.PORT || 3001;
const app = Express();
app.use(cors());
app.use(Express.json());

app.get("/getUsers", async (req, res) => {
  const userCusor = await DB.users.find({});
  const users = await userCusor.toArray();

  res.json(users);
});

app.post("/setUser", async (req, res) => {
  const userCusor = await DB.users.find({}).count();
  const setUser = userCusor + 1;

  DB.users.insertOne({
    num: setUser,
    title: req.body.title,
    text: req.body.text,
  });
});

app.post("/deleteUser", async (req, res) => {
  await DB.users.deleteOne({ num: req.body.num });
});

app.post("/updateUser", async (req, res) => {
  await DB.users.updateOne(
    { num: req.body.num },
    { $set: { text: req.body.text } }
  );
});

connect.on("connectionOK", () => {
  app.listen(PORT, () => {
    console.log("server is running");
  });
});
connect.get();
