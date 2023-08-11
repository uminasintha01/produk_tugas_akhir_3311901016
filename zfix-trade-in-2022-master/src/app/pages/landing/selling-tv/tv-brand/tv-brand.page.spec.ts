import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TvBrandPage } from './tv-brand.page';

describe('TvBrandPage', () => {
  let component: TvBrandPage;
  let fixture: ComponentFixture<TvBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TvBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
