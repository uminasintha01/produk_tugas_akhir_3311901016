import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenTestingPage } from './screen-testing.page';

describe('ScreenTestingPage', () => {
  let component: ScreenTestingPage;
  let fixture: ComponentFixture<ScreenTestingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenTestingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenTestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
