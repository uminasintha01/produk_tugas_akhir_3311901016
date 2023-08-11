import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailUnitPage } from './detail-unit.page';

describe('DetailUnitPage', () => {
  let component: DetailUnitPage;
  let fixture: ComponentFixture<DetailUnitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUnitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailUnitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
