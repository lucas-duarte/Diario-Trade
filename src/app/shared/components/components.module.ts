import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableTradesComponent } from './table-trades/table-trades.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    TableTradesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent, 
    TableTradesComponent
  ]
})
export class ComponentsModule { }
