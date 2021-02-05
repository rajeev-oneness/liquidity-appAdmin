import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRUDFoodPage } from './crudfood.page';

describe('CRUDFoodPage', () => {
  let component: CRUDFoodPage;
  let fixture: ComponentFixture<CRUDFoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDFoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRUDFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
