import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ massage: "Hello World!" });
});

app.listen(3333, () => console.log("Starting server!"));
