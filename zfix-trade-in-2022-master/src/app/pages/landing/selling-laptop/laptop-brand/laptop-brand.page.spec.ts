import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaptopBrandPage } from './laptop-brand.page';

describe('LaptopBrandPage', () => {
  let component: LaptopBrandPage;
  let fixture: ComponentFixture<LaptopBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
