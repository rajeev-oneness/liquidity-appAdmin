import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserOrderListPage } from './user-order-list.page';

describe('UserOrderListPage', () => {
  let component: UserOrderListPage;
  let fixture: ComponentFixture<UserOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
