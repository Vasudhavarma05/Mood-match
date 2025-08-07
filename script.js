
const quotes = {
    happy: [
      "Happiness is a direction, not a place.",
      "The purpose of our lives is to be happy."
    ],
    sad: [
      "Tears come from the heart, not the brain.",
      "Sadness flies away on the wings of time."
    ],
    stressed: [
      "Stress is caused by being 'here' but wanting to be 'there'.",
      "You don’t have to control your thoughts. You just have to stop letting them control you."
    ],
    excited: [
      "Stay close to people who feel like sunshine.",
      "The excitement of learning separates youth from old age."
    ]
  };
  
  document.getElementById('getQuote').addEventListener('click', () => {
    const mood = document.getElementById('mood').value;
    const display = document.getElementById('quoteDisplay');
    document.body.className = ''; // reset
    if (quotes[mood]) {
      const arr = quotes[mood];
      const text = arr[Math.floor(Math.random() * arr.length)];
      display.textContent = text;
      document.body.classList.add(`mood‑${mood}`);
    } else {
      display.textContent = "Please select a mood.";
    }
  });
  