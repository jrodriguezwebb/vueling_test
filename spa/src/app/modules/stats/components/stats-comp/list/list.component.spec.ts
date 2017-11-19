import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { StatsService } from '../../../services/stats.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: StatsService;
  let componentAux: ListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
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

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = new StatsService(null);
    componentAux = new ListComponent(null, null, service);
  }));

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('it should set resultSet property when server returns a json', async(() => {
    const response = {
      resultSets: [
        {
          rowSet: [
            [1627773, 'AJ Hammons', 1610612742, 'DAL', 24, '7-0', 84, '260', 'Purdue',
            'USA', '2016', '2', '46', 22, 48, 36, 4, -0.6, 0.049, 0.199, 0.167, 0.472, 0.038],
            [201166, 'Aaron Brooks', 1610612754, 'IND', 32, '6-0', 72, '161', 'Oregon', 'USA', '2007', '1',
            '26', 65, 322, 69, 125, -3, 0.022, 0.064, 0.191, 0.507, 0.216]
          ]
        }
      ]
    };
    // replace the real implementation
    spyOn(service, 'getList').and.callFake(() => {
      return Observable.from([response]);
    });
    componentAux.ngOnInit();
    expect(componentAux.resultSet).toBe(response.resultSets[0].rowSet);
  }));
});
