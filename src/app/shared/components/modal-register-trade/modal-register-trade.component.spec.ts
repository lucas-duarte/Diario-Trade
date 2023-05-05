import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterTradeComponent } from './modal-register-trade.component';

describe('ModalRegisterTradeComponent', () => {
  let component: ModalRegisterTradeComponent;
  let fixture: ComponentFixture<ModalRegisterTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegisterTradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegisterTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
