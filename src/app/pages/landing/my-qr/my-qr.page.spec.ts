import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyQrPage } from './my-qr.page';

describe('MyQrPage', () => {
  let component: MyQrPage;
  let fixture: ComponentFixture<MyQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
