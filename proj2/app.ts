import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: process.env.USER_NAME })
});

app.get("/products", (req, res) => {
    res.json({ messagezzzz: "products" })
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});