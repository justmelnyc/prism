import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'


import {HomeComponent, PrismComponent} from '../home'
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component'


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    PrismComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    PrismComponent
  ]
})
export class SharedModule { }
