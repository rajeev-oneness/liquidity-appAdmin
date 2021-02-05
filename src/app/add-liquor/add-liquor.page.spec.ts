import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLiquorPage } from './add-liquor.page';

describe('AddLiquorPage', () => {
  let component: AddLiquorPage;
  let fixture: ComponentFixture<AddLiquorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLiquorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLiquorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
