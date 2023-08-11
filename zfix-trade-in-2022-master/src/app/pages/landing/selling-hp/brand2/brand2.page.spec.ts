import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Brand2Page } from './brand2.page';

describe('Brand2Page', () => {
  let component: Brand2Page;
  let fixture: ComponentFixture<Brand2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brand2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Brand2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
