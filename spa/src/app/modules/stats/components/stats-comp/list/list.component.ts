import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { StatsService } from '../../../services/stats.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stats-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  public resultSet;
  private loading: Boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _statsService: StatsService,
  ) { }

  ngOnInit(){
    this.loading = true;
    this.list();
  }
  list(){
    this._statsService.getList().subscribe(
      response => {
        // console.log(response);
        if(response.hasOwnProperty('resultSets') && response.resultSets.length > 0){
          this.resultSet = response.resultSets[0].rowSet;
          this.loading = false;
          // console.log(JSON.stringify(this.resultSet));
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  playerDetails(id, row){
    // PASAR DATOS POR UN SERVICIO
    /* this._statsService.data = new Observable(observer => {
        observer.next(row);
        observer.complete();
    }); */
    this._router.navigate(['stats/player/' + id ]);
  }
}
