import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalarieComponent } from './salarie/salarie.component';
import { AddSalarieComponent } from './salarie/add-salarie/add-salarie.component';

const routes: Routes = [
  {path:'salarie', component:SalarieComponent},
  {path:'salarie/{id}', component:AddSalarieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
