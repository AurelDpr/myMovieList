export class Movies {
  id = 0;
  userId: number;
  movieId: number;
  title: string;
  type: string;
  posterPath: string;

  constructor(userId, movieId, title, type, posterPath) {
    this.userId = userId;
    this.movieId = movieId;
    this.title = title;
    this.type = type;
    this.posterPath = posterPath;
  }
}
