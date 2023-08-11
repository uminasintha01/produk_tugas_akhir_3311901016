import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailUnitPsPage } from './detail-unit-ps.page';

describe('DetailUnitPsPage', () => {
  let component: DetailUnitPsPage;
  let fixture: ComponentFixture<DetailUnitPsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUnitPsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailUnitPsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
