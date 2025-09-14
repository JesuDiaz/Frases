const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

// Array de frases en memoria
let quotes = [
  "Nunca es tarde para aprender.",
  "La disciplina vence al talento.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "La motivación te pone en marcha, el hábito te mantiene.",
];

// GET → todas las frases
app.get("/random/quotes", (req, res) => {
  res.json(quotes);
});

// GET → frase aleatoria
app.get("/random/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// POST → agregar nueva frase
app.post("/random/quotes", (req, res) => {
  const { phrase } = req.body;
  if (!phrase) {
    return res
      .status(400)
      .json({ error: "Debes enviar un campo 'phrase' en el body." });
  }
  quotes.push(phrase);
  res.status(201).json({ message: "Frase agregada con éxito.", quotes });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
