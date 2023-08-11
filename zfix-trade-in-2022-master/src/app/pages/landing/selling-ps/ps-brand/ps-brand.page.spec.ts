import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsBrandPage } from './ps-brand.page';

describe('PsBrandPage', () => {
  let component: PsBrandPage;
  let fixture: ComponentFixture<PsBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
