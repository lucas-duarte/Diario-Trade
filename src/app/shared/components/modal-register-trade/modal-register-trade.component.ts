import { Component, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Setup } from 'src/app/interfaces/Setup';
import { Trigger } from 'src/app/interfaces/Trigger';
import { DiarioTradeService } from 'src/app/services/trade-journal/diario-trade.service';

@Component({
  selector: 'app-modal-register-trade',
  templateUrl: './modal-register-trade.component.html',
  styleUrls: ['./modal-register-trade.component.scss']
})
export class ModalRegisterTradeComponent {

  setups: Setup[] | undefined;
  triggers: Trigger[] | undefined;

  formRegisterTrade = this.formBuilder.group({
    dateOperation: new Date().toISOString().slice(0, 10),
    hours: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    address: ''
  });

  constructor(
    private diarioTradeService: DiarioTradeService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getTriggers();
  }

  onAtivoSelect(event: any) {
    const ativoId = parseInt(event.target.value);
    this.diarioTradeService.ReturnSetups(ativoId).subscribe((data) => {
      this.setups = data;
    });
  }

  getTriggers() {
    this.diarioTradeService.ReturnTriggers().subscribe((data) => {
      this.triggers = data;
    });
  }

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.formRegisterTrade.value);
    this.formRegisterTrade.reset();
  }
}
