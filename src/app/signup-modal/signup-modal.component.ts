import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { SignupParams } from '../signup-params'
import { UserService } from '../user.service'
import * as $ from 'jquery'

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSubmit() {
    const formData = this.signupForm.value
    const submission: SignupParams = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }
    this.userService.signUp(submission, () => {
      $('#signup-modal').modal('hide')
    })
  }
}
