import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const sessions = [
  { userId: 1, topic: "Verbos reflexivos" },
  { userId: 1, topic: "Compras" },
  { userId: 1, topic: "Pronomes" }
];

app.get("/api/adaptive-plan/:userId", (req, res) => {
  const { userId } = req.params;
  const filtered = sessions.filter(s => s.userId == userId);
  const topics = {};

  filtered.forEach(s => topics[s.topic] = (topics[s.topic] || 0) + 1);
  const recommendations = Object.entries(topics).map(([topic], i) => ({
    title: `Foco ${i + 1}: ${topic}`,
    activity: `Revisar o tema "${topic}" com exemplos e prática.`
  }));

  res.json({ userId, recommendations });
});

app.listen(3001, () => console.log("API rodando em http://localhost:3001"));
