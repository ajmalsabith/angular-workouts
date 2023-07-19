import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './coponents/child/child.component';
import { ParantComponent } from './coponents/parant/parant.component';

const routes: Routes = [
  {path:'chailde',component:ChildComponent},
  {path:'parent',component:ParantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
