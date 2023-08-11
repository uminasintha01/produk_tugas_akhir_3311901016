import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllbunttonPage } from './allbuntton.page';

describe('AllbunttonPage', () => {
  let component: AllbunttonPage;
  let fixture: ComponentFixture<AllbunttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbunttonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllbunttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
