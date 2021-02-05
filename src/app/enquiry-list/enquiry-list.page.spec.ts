import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquiryListPage } from './enquiry-list.page';

describe('EnquiryListPage', () => {
  let component: EnquiryListPage;
  let fixture: ComponentFixture<EnquiryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
