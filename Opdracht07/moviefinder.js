let movies;

const searchAllMovies = () => {
  movies = movieList;
  addMoviesToDOM(movies);
};

const bigMovieFilter = (wordInMovieTitle) => {
  movies = movieList;
  let filteredMovies = movies.filter((movie) => {
    let movieTitle = movie.Title;
    if (movieTitle.includes(wordInMovieTitle)) {
      return movie.Title;
    }
  });
  movies = filteredMovies;
  // console.log(movies);
  addMoviesToDOM(movies);
};

const filterLatest = () => {
  movies = movieList;
  let latestMovies = movies.filter((movie) => {
    return movie.Year >= 2014;
  });
  // .map((movie) => {
  //     return movie.Title;
  //   });
  movies = latestMovies;
  // console.log(latestMovies);
  addMoviesToDOM(movies);
};

const inputElement = document.getElementById("filter--search");
const filterByInput = () => {
  movies = movieList;
  let filteredByInput = movies.filter((movie) => {
    let movieTitle = movie.Title;
    if (movieTitle.includes(inputElement.value)) {
      return movie.Title;
    }
  });
  console.log(filteredByInput);
  movies = filteredByInput;
  addMoviesToDOM(movies);
};

inputElement.oninput = filterByInput;


const inputClearBtn = document.getElementById("clear-input");
const clearInput = () => {
  inputElement.value = '';
};

inputClearBtn.onclick = clearInput;

const handleOnChangeEvent = (e) => {
  let target = e.target;
  switch (target.value) {
    case "batman":
      bigMovieFilter("Batman");
      break;
    case "princess":
      bigMovieFilter("Princess");
      break;
    case "xmen":
      bigMovieFilter("X-Men");
      break;
    case "avengers":
      bigMovieFilter("Avengers");
      break;
    case "latest":
      filterLatest();
      break;
    case "all":
      searchAllMovies();
      break;
    default:
      movies = movieList;
      addMoviesToDOM(movies);
  }
};

const radioBtns = document.getElementsByClassName("radio_btn");
const radioBtnsArray = Array.from(radioBtns);
radioBtnsArray.forEach((button) =>
  button.addEventListener("change", handleOnChangeEvent)
);

//END RADIOBUTTONS:

//BEGIN FILTER MOVIES:

// bigMovieFilter('Batman');
// bigMovieFilter('X-Men');
// bigMovieFilter('Avengers');
// bigMovieFilter('Princess');

//BEGIN DOM BUILD ON LOAD:

// console.log(movieNames);

// console.log(imbdId);

// console.log(posterUrls);

const addMoviesToDOM = (movies) => {
  const mainContainer = document.querySelector("#container");
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  const movieNames = movies.map((movie) => {
    return movie.Title;
  });
  // console.log(movieNames);

  const imbdId = movies.map((movie) => {
    return movie.imdbID;
  });

  const posterUrls = movies.map((movie) => {
    return movie.Poster;
  });

  const imbdUrl = "https://www.imdb.com/title/";

  for (i = 0; i < movieNames.length; i++) {
    const newMovie = document.createElement("section");
    newMovie.classList.add("newmovie_container");
    const newMovieImg = document.createElement("img");
    newMovieImg.src = posterUrls[i];
    newMovieImg.classList.add("img");
    const newMovieUrl = imbdUrl + imbdId[i];
    const newMovieLink = document.createElement("a");
    newMovieLink.classList.add("movielink");
    newMovieLink.innerHTML = movieNames[i];
    newMovieLink.href = newMovieUrl;

    mainContainer.appendChild(newMovie);
    newMovie.appendChild(newMovieImg);
    newMovie.appendChild(newMovieLink);
  }
};

movies = movieList;
addMoviesToDOM(movies);
