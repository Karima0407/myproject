import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent {
  constructor(private serviceMovie:MovieService){

  }
  title!: string;
  description!: string;
  url!: string;
movie!:Movie;
  submitForm(){
    this.movie=new Movie(
      this.serviceMovie.movies.length+1,
      this.title,
      this.description,
      this.url,
      0,
      false,5
    )
    this.serviceMovie.movies.push(this.movie);
  }
}
