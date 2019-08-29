import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Hero } from 'src/app/shared/models/hero.model';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/shared/models/comic.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Subscriber
  public subscription: Subscription;

  // Hero
  public hero: Hero;
  public heroName: string;

  // Comic
  public comics: Comic[] = [];
  public newestComics: Comic[] = [];
  public hasComics: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.hasComics = data.hasComics;
    this.comics = data.comics;
    this.heroName = data.heroName;
  }

  ngOnInit() {
    this.sortComics(this.comics);
  }

  sortComics(comics: Array<any>) {
    comics.sort((a, b) => {
      if (a.dates[0].date > b.dates[0].date) { return 1; }
      if (a.dates[0].date < b.dates[0].date) { return -1; }
      return 0;
    });
    comics.reverse();
    this.newestComics = comics.slice(0, 5);
    console.log(this.newestComics);
  }

}
