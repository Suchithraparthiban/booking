async function searchDestinations() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  if (!resultsContainer) return; // prevent errors on non-home pages

  resultsContainer.innerHTML = "Searching...";

  const response = await fetch("data.json");
  const data = await response.json();

  const filtered = data.destinations.filter(dest =>
    dest.keywords.some(k => k.includes(input)) || dest.city.toLowerCase().includes(input)
  );
  function search() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const destinations = data.destinations;
      const filtered = destinations.filter((dest) =>
        dest.keywords.some((kw) => kw.toLowerCase().includes(query)) ||
        dest.name.toLowerCase().includes(query) ||
        dest.city.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        resultsContainer.innerHTML = "<p>No destinations found.</p>";
        return;
      }

      filtered.forEach((dest, i) => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.style.backgroundImage = `url("${dest.image}")`;
        card.style.animationDelay = `${i * 0.1}s`;

        card.innerHTML = `
          <div class="card-overlay">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <p><strong>City:</strong> ${dest.city}</p>
            <p><strong>Local Time:</strong> ${new Date().toLocaleTimeString()}</p>
          </div>
        `;

        resultsContainer.appendChild(card);
      });
    });
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
}


  resultsContainer.innerHTML = "";

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  filtered.forEach((dest, i) => {
  const card = document.createElement("div");
  card.className = "destination-card";
  card.style.backgroundImage = `url("${dest.image}")`;
  card.style.animationDelay = `${i * 0.1}s`;

  card.innerHTML = `
    <div class="card-overlay">
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
      <p><strong>City:</strong> ${dest.city}</p>
      <p><strong>Local Time:</strong> ${new Date().toLocaleTimeString()}</p>
    </div>
  `;

  resultsContainer.appendChild(card);

  });
}

function clearSearch() {
  const input = document.getElementById("searchBox");
  if (input) input.value = "";

  const resultsContainer = document.getElementById("results");
  if (resultsContainer) resultsContainer.innerHTML = "";
}


