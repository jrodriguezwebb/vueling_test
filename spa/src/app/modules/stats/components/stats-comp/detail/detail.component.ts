import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StatsService } from '../../../services/stats.service';

// Clientes

@Component({
  selector: 'app-stats-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers   : [
  ]
})
export class DetailComponent implements OnInit {
  titulo: string;
  jugador: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _statsService: StatsService
  ) {
    this.titulo   = 'Detalle Jugador';
    this.jugador = {
      name: '',
      surname: '',
      birthday: '' };
  }

  ngOnInit() {
    const id = this._route.snapshot.params.id;
    // RECIBIR DATOS DE UN SERVICIO
    /* this._statsService.data.subscribe(
    (jugador) => {
      this.jugador = jugador;
      console.log(this.jugador);
    },
    error => {
      console.log(error);
    }); */
    this.getPlayer(id);
  }
  getPlayer(id) {
      this._statsService.getPlayer(id).subscribe((jugador) => {
      // console.log(jugador.resultSets[0].rowSet[0]);
      this.jugador.name = jugador.resultSets[0].rowSet[0][1];
      this.jugador.surname = jugador.resultSets[0].rowSet[0][2];
      this.jugador.birthday = jugador.resultSets[0].rowSet[0][6];
    });
  }
}
