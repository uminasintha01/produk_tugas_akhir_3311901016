import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallUsPage } from './call-us.page';

describe('CallUsPage', () => {
  let component: CallUsPage;
  let fixture: ComponentFixture<CallUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
