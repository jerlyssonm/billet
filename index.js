import express from "express";


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
  });

app.get("/:bar_code", (req, res) => {
    const {bar_code} = req.params;
    res.send(`show ${bar_code}`)
});

app.listen(8080, () => console.log('`App running on port 8080'))
