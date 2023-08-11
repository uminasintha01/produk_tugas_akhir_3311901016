import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KulkasBrandPage } from './kulkas-brand.page';

describe('KulkasBrandPage', () => {
  let component: KulkasBrandPage;
  let fixture: ComponentFixture<KulkasBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KulkasBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KulkasBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
