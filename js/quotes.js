const quoteText = document.getElementById('quote-text');
const quoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  quoteText.textContent = 'Loading...';
  try {
    const resp = await fetch('https://api.quotable.io/random');
    const data = await resp.json();
    quoteText.textContent = `${data.content} — ${data.author}`;
  } catch (e) {
    quoteText.textContent = 'Error fetching quote';
  }
}

quoteBtn.addEventListener('click', fetchQuote);
fetchQuote();
