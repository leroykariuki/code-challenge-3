// Fetch movies data from the server
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.getElementById('movies');
    data.films.forEach(movie => {
      const movieElement = createMovieElement(movie);
      moviesContainer.appendChild(movieElement);
    });
  })
  .catch(error => console.error('Error:', error));

// Create a movie element based on the movie data
function createMovieElement(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const moviePoster = document.createElement('img');
  moviePoster.src = movie.poster;
  movieElement.appendChild(moviePoster);

  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');

  const titleElement = document.createElement('h2');
  titleElement.textContent = movie.title;
  movieInfo.appendChild(titleElement);

  const runtimeElement = document.createElement('p');
  runtimeElement.textContent = `Runtime: ${movie.runtime} mins`;
  movieInfo.appendChild(runtimeElement);

  const capacityElement = document.createElement('p');
  const ticketsLeft = movie.capacity - movie.tickets_sold;
  capacityElement.textContent = `Tickets Left: ${ticketsLeft}`;
  movieInfo.appendChild(capacityElement);

  const showtimeElement = document.createElement('p');
  showtimeElement.textContent = `Showtime: ${movie.showtime}`;
  movieInfo.appendChild(showtimeElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = movie.description;
  movieInfo.appendChild(descriptionElement);

  movieElement.appendChild(movieInfo);

  return movieElement;
}
