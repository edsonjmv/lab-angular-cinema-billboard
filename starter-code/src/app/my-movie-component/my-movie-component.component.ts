import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movie: Object;

  constructor(public cinema: CinemaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .subscribe((params) => this.movieId = Number(params['id']));
      this.movie = this.cinema.getMovie(this.movieId)
  }
  }
