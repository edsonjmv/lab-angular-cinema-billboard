import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Object[];

  constructor(public cinema: CinemaService, private router: Router) {
    this.movies = this.cinema.getMovies();
    // console.log(this.movies)
  }

  ngOnInit() {

  }

  viewDetails(id) {
    this.router.navigate(['movie', id]);
  }

}
