export class Movie {
  constructor(
    public id:number,
    public title: string,
    public description: string,
    public urlImage: string,
    public likes: number,
    public liked: boolean,
    public price:number
  ) {}
}
