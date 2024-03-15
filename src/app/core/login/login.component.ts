import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit, OnDestroy {
  signInForm: any;
  invalidCredentials: boolean = false;
  allUserSubs: Subscription | undefined;
  registeredUsers: any = {};
  currentYear = (new Date()).getFullYear();

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.allUserSubs = this.usersService.getLoginCredentials().subscribe((res: any) => {
      this.registeredUsers = res;
    });
    this.createUserForm();
  }


  createUserForm() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  signIn() {
    if (this.signInForm.invalid) {
      return;
    }
    else {
      const isUserExist = this.registeredUsers.find((user: { name: any; password: any; })=>user.name == this.signInForm.value.username && user.password == this.signInForm.value.password);
      if (isUserExist) {
        this.invalidCredentials = false;
        this.usersService.loggedInUser = isUserExist.name;
        this.router.navigateByUrl('/templates');
      }
      this.invalidCredentials = true;
    }
  }

  ngOnDestroy() {
    this.allUserSubs && this.allUserSubs.unsubscribe();
  }
}
