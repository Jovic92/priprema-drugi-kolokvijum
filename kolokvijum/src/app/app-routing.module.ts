import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddSkillComponent } from './skills/add-skill/add-skill.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'product/list', component: SkillListComponent, canActivate:[AuthGuard] },
{ path: 'product/create', component: AddSkillComponent, canActivate:[AuthGuard]  },
{ path: '**', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
