let numberOfFilms = +prompt("Сколько фильмов вы посмотрели");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt("Kakoy posledniy film?");
let b = prompt("Kakaya ocenka");
let c = prompt("Kakoy posledniy film?");
let d = prompt("Kakaya ocenka");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);