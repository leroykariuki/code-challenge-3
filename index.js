const filmDetails = document.getElementById('film-details');
const filmTitle = document.getElementById('film-title');
const filmPoster = document.getElementById('film-poster');
const filmRuntime = document.getElementById('film-runtime');
const filmShowtime = document.getElementById('film-showtime');
const filmAvailableTickets = document.getElementById('film-available-tickets');
const buyTicketBtn = document.getElementById('buy-ticket-btn');
const filmMenu = document.getElementById('films');

let films = [];

// Fetch all films from the server
fetch('/films')
  .then(response => response.json())
  .then(data => {
    films = data;
    populateFilmMenu();
    showFilmDetails(0);
  })
  .catch(error => console.log(error));

function populateFilmMenu() {
  filmMenu.innerHTML = '';
  films.forEach(film => {
    const li = document.createElement('li');
    li.textContent = film.title;
    li.classList.add('film-item');
    li.addEventListener('click', () => showFilmDetails(film.id));
    filmMenu.appendChild(li);
  });
}

function showFilmDetails(filmId) {
  const film = films.find(f => f.id === filmId);
  if (film) {
    filmTitle.textContent = film.title;
    filmPoster.src = film.poster;
    filmRuntime.textContent = `Runtime: ${film.runtime} mins`;
    filmShowtime.textContent = `Showtime: ${film