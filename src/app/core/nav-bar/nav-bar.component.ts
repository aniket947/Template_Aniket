import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedInUser: string | undefined;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.loggedInUser = this.userService.loggedInUser;
   }

  logout() {
    this.userService.loggedInUser = "";
    this.router.navigate([`/login`]);
  }

}
