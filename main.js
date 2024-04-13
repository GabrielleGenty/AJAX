  const API_KEY = "809f35e8cbc1c3c408af4797baf425f4";
  const url = "https://api.themoviedb.org/3/trending/movie/week?";
  const API_URL_IMG = "https://image.tmdb.org/t/p/original";

  function fetchHandler(url) {

    fetch(url)
      .then(response => response.json())
      .then(response => responseHandler(response.results))
      .catch(error => console.log(error))

  }

  function responseHandler(movies) {
    console.log(movies);
    // avant la boucle on sélectionne la balise section
    const section = document.querySelector("section");
    // et on va injecter chaque article (movie) en tant qu'enfant de section
    for (let i = 0; i < movies.length; i++) {
      
      const div=document.createElement("div");

      const article = document.createElement("article"); // createElement
      const title = document.createElement("h3");
      title.textContent = movies[i].original_title;
      console.log(movies[i].original_title);

      const releaseDate = document.createElement("p");
      releaseDate.textContent = 'Released in ' + movies[i].release_date;
      console.log(movies[i].release_date);


      const img = document.createElement("img");
      img.src = API_URL_IMG + movies[i].poster_path;
      // pour l'image concatener API_URL_IMG avec le poster_path dans la propriété src

      const story = document.createElement("p");
      story.textContent = 'Story :' + movies[i].overview;
      console.log(story);

      const voteCount = document.createElement("p");
      voteCount.textContent = 'Votes ' + movies[i].vote_count;
      console.log(movies[i].vote_count);

      // ajouter (append) chaque article à la section
      section.appendChild(article);
      div.append(img,story);

      article.append(title, releaseDate, voteCount, div);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {

    fetchHandler(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  });
  