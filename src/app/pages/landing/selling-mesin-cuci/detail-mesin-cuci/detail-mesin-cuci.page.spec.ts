import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMesinCuciPage } from './detail-mesin-cuci.page';

describe('DetailMesinCuciPage', () => {
  let component: DetailMesinCuciPage;
  let fixture: ComponentFixture<DetailMesinCuciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMesinCuciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMesinCuciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
