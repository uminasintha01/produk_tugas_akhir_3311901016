import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTvPage } from './detail-tv.page';

describe('DetailTvPage', () => {
  let component: DetailTvPage;
  let fixture: ComponentFixture<DetailTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
