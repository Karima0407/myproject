import { Component,OnInit,Input } from '@angular/core';
import{Movie}from '../models/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent  {
  constructor(private serviceMovie:MovieService){

  }
  @Input() movie!:Movie;
  
  // title!: string;
  // description!: string;
  // likes!: number;
  // urlImage!: string;
  // liked!:boolean;

  // ngOnInit(){
  //   this.movie=new Movie(
  //     'La reine des neiges',
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut minus aliquam rem temporibus dignissimos in, voluptates consequatur distinctio maiores, minima eos sit, doloribus voluptas suscipit blanditiis fugiat at. Quia.",
  //     'https://static.posters.cz/image/1300/toiles-frozen-elsa-anna-i110842.jpg',
  //     27,
  //     false
  //   )
  //   // this.title = ;
  //   // this.description = "C'est un anime";
  //   // this.likes = 27;
  //   // this.liked==false;
  //   // this.urlImage =
      
  // }
  jelike(){
    if (this.movie.liked==true){
      this.movie.likes--;
      this.movie.liked=false;
    }else{
      this.movie.likes++;
      this.movie.liked=true;
    }
  }

  remove(){
    const index = this.serviceMovie.movies.findIndex(
      (film) => film.id === this.movie.id
    );
     if (index !== -1) {
      this.serviceMovie.movies.splice(index, 1);}
  }
  }

