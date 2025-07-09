const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let neighborhoods = [];

function loadNeighborhoodsFromCSV() {
  neighborhoods = []; 
  fs.createReadStream('data/bangalore_neighborhoods.csv')
    .pipe(csv())
    .on('data', (row) => {

      const nameKey = Object.keys(row).find(k => k.toLowerCase().includes('name'));
      const scores = {};

      Object.keys(row).forEach(key => {
        if (key !== nameKey) scores[key] = Number(row[key]);
      });

      const neighborhood = {
        name: row[nameKey]?.trim() || 'Unknown',
        scores: scores
      };

      neighborhoods.push(neighborhood);
      console.log('Loaded neighborhood:', neighborhood.name);
    })
    .on('end', () => {
      console.log('CSV loaded successfully.');
    });
}

loadNeighborhoodsFromCSV();

function matchNeighborhoods(userPrefs, profession) {
  const weightsMap = {
    student: {
      safety: 2,
      affordability: 2,
      transport: 1,
      socialLife: 1,
      greenSpaces: 1,
      peaceQuiet: 1,
      commuteTime: 1
    },
    professional: {
      commuteTime: 2,
      transport: 2,
      affordability: 1,
      safety: 1,
      socialLife: 1,
      greenSpaces: 1,
      peaceQuiet: 1
    }
  };

  const weights = weightsMap[profession] || {};

  return neighborhoods.map(n => {
    let total = 0;
    let weightSum = 0;

    userPrefs.forEach(pref => {
      const weight = weights[pref] || 1;
      const score = n.scores[pref] || 0;
      total += score * weight;
      weightSum += weight;
    });

    const matchScore = weightSum > 0 ? total / weightSum : 0;

    return {
      name: n.name,
      matchScore: parseFloat(matchScore.toFixed(2))
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}

app.post('/match', (req, res) => {
  const { preferences, profession } = req.body;
  if (!preferences || !profession) {
    return res.status(400).json({ error: 'Missing preferences or profession' });
  }
  const results = matchNeighborhoods(preferences, profession);
  res.json(results);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
