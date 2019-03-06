import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { HomePageComponent } from './home-page/home-page.component'
import { UserProfileComponent } from './user-profile/user-profile.component'

const routes: Routes = [
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'users', component: UserListComponent },
  { path: '', component: HomePageComponent },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
