import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiquorMenuPage } from './liquor-menu.page';

describe('LiquorMenuPage', () => {
  let component: LiquorMenuPage;
  let fixture: ComponentFixture<LiquorMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiquorMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
