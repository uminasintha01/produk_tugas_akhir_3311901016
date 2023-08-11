import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesinCuciBrandPage } from './mesin-cuci-brand.page';

describe('MesinCuciBrandPage', () => {
  let component: MesinCuciBrandPage;
  let fixture: ComponentFixture<MesinCuciBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesinCuciBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesinCuciBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
