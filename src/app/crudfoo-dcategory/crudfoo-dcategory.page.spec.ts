import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRUDFooDCategoryPage } from './crudfoo-dcategory.page';

describe('CRUDFooDCategoryPage', () => {
  let component: CRUDFooDCategoryPage;
  let fixture: ComponentFixture<CRUDFooDCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDFooDCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRUDFooDCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
