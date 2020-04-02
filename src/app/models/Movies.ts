export class Movies {
  id = 0;
  userId: number;
  movieId: number;
  title: string;
  posterPath: string;

  constructor(userId, movieId, title, posterPath) {
    this.userId = userId;
    this.movieId = movieId;
    this.title = title;
    this.posterPath = posterPath;
  }
}
