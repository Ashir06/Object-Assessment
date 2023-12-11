document.addEventListener("DOMContentLoaded", function () {
    const favoriteMovies = [
      {
        name: "The Lorax",
        year: 2012,
        director: "Chris Renaud, Kyle Balda",
        picture: "http://www.impawards.com/2012/posters/lorax_ver2.jpg",
      },
      {
        name: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        picture: "https://i.ebayimg.com/images/g/m88AAOSwtC1gr5ry/s-l1600.jpg",
      },
      {
        name: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        picture: "https://images.pristineauction.com/158/1582578/main_1597378492-The-Dark-Knight-27x40-Movie-Poster-PristineAuction.com.jpg",
      },
    ];
    const moviesList = document.getElementById("moviesList");
    const movieItems = favoriteMovies.map((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${movie.name}</strong> (${movie.year}) - Directed by ${movie.director}<br>
        <img src="${movie.picture}" alt="${movie.name} Poster" width="150">
      `;
      return li;
    });
    
    movieItems.forEach((item) => {
      moviesList.appendChild(item);
    });
  });
  