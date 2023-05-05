import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableTradesComponent } from './table-trades/table-trades.component';
import { ModalRegisterTradeComponent } from './modal-register-trade/modal-register-trade.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    ToolbarComponent,
    TableTradesComponent,
    ModalRegisterTradeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule     
  ],
  exports: [
    ToolbarComponent, 
    TableTradesComponent,
    ModalRegisterTradeComponent
  ]
})
export class ComponentsModule { }
