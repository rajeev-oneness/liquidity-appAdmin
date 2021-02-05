import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiquorShopListPage } from './liquor-shop-list.page';

describe('LiquorShopListPage', () => {
  let component: LiquorShopListPage;
  let fixture: ComponentFixture<LiquorShopListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorShopListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiquorShopListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
