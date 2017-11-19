import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { StatsService } from '../../../services/stats.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DetailComponent } from './detail.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let service: StatsService;
  let componentAux: DetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [
        StatsService
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = new StatsService(null);
    componentAux = new DetailComponent(null, null, service);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('it should set jugador property when server returns a json', () => {
    const response = {
      resultSets: [{
        rowSet: [ [0, 1, 2, 3, 4, 5, 6] ]
      }]
    };

    const jugador = {
      name : response.resultSets[0].rowSet[0][1],
      surname : response.resultSets[0].rowSet[0][2],
      birthday : response.resultSets[0].rowSet[0][6]
    };

    spyOn(service, 'getPlayer').and.callFake(() => {
      return Observable.from([response]);
    });

    componentAux.getPlayer(1);
    expect(componentAux.jugador).toEqual(jugador);
  });
});
