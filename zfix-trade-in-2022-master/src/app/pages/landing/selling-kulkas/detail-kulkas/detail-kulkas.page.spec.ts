import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailKulkasPage } from './detail-kulkas.page';

describe('DetailKulkasPage', () => {
  let component: DetailKulkasPage;
  let fixture: ComponentFixture<DetailKulkasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKulkasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailKulkasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
