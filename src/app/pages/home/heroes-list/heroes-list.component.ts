import { HeroService } from './../../../shared/services/hero.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { Hero } from 'src/app/shared/models/hero.model';
import { Subscription } from 'rxjs';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {

  // Subscriber
  public subscription: Subscription;

  // Table Properties
  public displayedColumns: string[] = ['id', 'name', 'comics', 'series', 'stories', 'events'];

  // Heroes
  public heroList: Hero[] = [];
  public dataSource: MatTableDataSource<Hero>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private heroService: HeroService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getHeroList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getHeroList() {
    this.subscription = this.heroService.getAll('/characters').subscribe(res => {
      this.heroList = res.data.results;
      this.populateTable(this.heroList);
    });
  }

  populateTable(heroList: Array<Hero>) {
    this.dataSource = new MatTableDataSource(heroList);
    this.dataSource.paginator = this.paginator;
  }

  getHeroDetail(heroId: number, heroName: string) {
    let hasComics = true;
    this.subscription = this.heroService.getById('/characters', heroId.toString(), '/comics').subscribe(res => {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      res.data.results.length === 0 ? hasComics = false : hasComics = true;
      
      dialogConfig.data = {
        hasComics,
        comics: res.data.results,
        heroName
      };

      this.dialog.open(HeroDetailComponent, dialogConfig);
    });

  }

}
