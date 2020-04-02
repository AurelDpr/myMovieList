export class Movies {
  id = 0;
  userId: number;
  title: string;
  posterPath: string;

  constructor(userId, title, posterPath) {
    this.userId = userId;
    this.title = title;
    this.posterPath = posterPath;
  }
}
