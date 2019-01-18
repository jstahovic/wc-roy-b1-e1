import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DarkRedComponent } from './dark-red/dark-red.component'
import { LightRedComponent } from './light-red/light-red.component'
import { MediumRedComponent } from './medium-red/medium-red.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'light-red' },
  { path: 'light-red', component: LightRedComponent },
  { path: 'medium-red', component: MediumRedComponent },
  { path: 'dark-red', component: DarkRedComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedRoutingModule {}
