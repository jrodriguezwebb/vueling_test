import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { params } from './parameters.mock';

@Injectable()
export class StatsService{
    private url: string;
    private _data: Observable<any>;
    constructor(
        private _http: Http
    ){
        this.url = 'https://stats.nba.com/stats';
        this._data = new Observable(observer => {
            // observer.complete();
        });
    }

    // Estaba fallando por post 
    /* getList(){
        const body = new URLSearchParams();
        body.set('PerMode', 'Totals');
        body.set('Season', '2016-17');
        body.set('LeagueID', '00');
        body.set('SeasonType', 'Regular Season');
        const headers = new Headers({
            'Content-Type'  : 'application/x-www-form-urlencoded'
        });
        console.log(body.toString());
        return this.
                _http
                    .post( this.url + '/leaguedashplayerbiostats' , body.toString(), { headers: headers })
                    .map(res => res.json());
    } */

    // hecha nuevamente por get
    getList(){
        return this.
                _http
                    .get( this.url + '/leaguedashplayerbiostats?' + this.serialize(params))
                    .map(res => res.json());
    }
    getPlayer(id){
        const body = new URLSearchParams();
        body.set('PlayerID', id);
        const headers = new Headers({
            'Content-Type'  : 'application/x-www-form-urlencoded'
        });
        return this.
                _http
                    .post( this.url + '/commonplayerinfo' , body.toString(), { headers: headers })
                    .map(res => res.json());
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }

    // tslint:disable-next-line:one-line
    private serialize(obj: any){
        let str = '';
        // tslint:disable-next-line:forin
        for ( const name in obj ) {
            str += (name + '=' + obj[name] + '&');
        }
        return str = str.slice(0, -1);
    }
}
