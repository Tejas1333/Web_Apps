// data/movies.js

export const movies = [
  ...Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `Movie ${i + 1}`,
    releaseDate: `20${10 + (i % 10)}-0${(i % 9) + 1}-15`,
    genre: [
      "Action",
      "Drama",
      "Sci-Fi",
      "Romance",
      "Thriller",
      "Fantasy",
    ][i % 6],
    description: `This is the description for Movie ${
      i + 1
    }. `
  })),
];