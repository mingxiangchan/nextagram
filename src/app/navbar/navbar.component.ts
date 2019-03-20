import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedIn = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn
    })
  }
}
