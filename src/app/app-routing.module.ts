import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './componants/list/list.component';
import { AjouterComponent } from './componants/ajouter/ajouter.component';
import { ProfileComponent } from './componants/profile/profile.component';

const routes: Routes = [
  {path: 'list', component:ListComponent},
  {path: 'ajouter', component:AjouterComponent},
  {path: 'profile/:code', component:ProfileComponent},
  {path: '',redirectTo:'list',pathMatch:'full'},
  {path: '**', component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
