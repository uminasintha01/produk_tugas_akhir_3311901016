import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WifiDetectPage } from './wifi-detect.page';

describe('WifiDetectPage', () => {
  let component: WifiDetectPage;
  let fixture: ComponentFixture<WifiDetectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiDetectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WifiDetectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
