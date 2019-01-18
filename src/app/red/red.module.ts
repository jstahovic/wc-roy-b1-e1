import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RedRoutingModule } from './red-routing.module'
import { LightRedComponent } from './light-red/light-red.component'
import { MediumRedComponent } from './medium-red/medium-red.component'
import { DarkRedComponent } from './dark-red/dark-red.component'

@NgModule({
  declarations: [LightRedComponent, MediumRedComponent, DarkRedComponent],
  imports: [CommonModule, RedRoutingModule],
})
export class RedModule {}
