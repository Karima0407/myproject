import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies!: Movie[];
  constructor() {
    this.movies = [
      new Movie(
        1,
        'La reine des neiges',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut minus aliquam rem temporibus dignissimos in, voluptates consequatur distinctio maiores, minima eos sit, doloribus voluptas suscipit blanditiis fugiat at. Quia.',
        'https://static.posters.cz/image/1300/toiles-frozen-elsa-anna-i110842.jpg',
        27,
        false,
        6
      ),
      // this.title = ;
      // this.description = "C'est un anime";
      // this.likes = 27;
      // this.liked==false;
      // this.urlImage =
      new Movie(
        2,
        'Raiponce',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut minus aliquam rem temporibus dignissimos in, voluptates consequatur distinctio maiores, minima eos sit, doloribus voluptas suscipit blanditiis fugiat at. Quia.',
        'https://curiokids.net/wp-content/uploads/2022/10/Images-carrees-Curiokids-Raiponce.png',
        27,
        false,
        5
      ),

      new Movie(
        3,
        'Cindrella',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut minus aliquam rem temporibus dignissimos in, voluptates consequatur distinctio maiores, minima eos sit, doloribus voluptas suscipit blanditiis fugiat at. Quia.',
        'https://m.media-amazon.com/images/I/817OHj1A7tL._AC_UF1000,1000_QL80_.jpg',
        27,
        false,
        10
      ),
    ];
  }
}
