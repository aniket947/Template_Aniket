import { Component } from '@angular/core';
import { Address } from '../../../models/template';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-template',
  templateUrl: './add-edit-template.component.html',
  styleUrls: ['./add-edit-template.component.css']
})
export class AddEditTemplateComponent {

  address = new Address();
  addUserForm: any;
  selectedUserIndex: any;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.createUserForm();
    this.selectedUserIndex = this.usersService.selectedUserIndex ?? 0;
    if (this.selectedUserIndex > -1 && this.usersService.allUsers) {
      const selectedUserData = this.usersService.allUsers[this.selectedUserIndex];
      this.addUserForm.patchValue(selectedUserData);
    }
  }

  createUserForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      createdBy: new FormControl('', [Validators.required]),
      createdOn: new FormControl('', [Validators.required]),
      version: new FormControl('', [Validators.required]),
      lifeCycle: new FormControl(''),
      status: new FormControl(''),
      language: new FormControl(''),
      readyForPublish: new FormControl(''),
      bookmarksEdited: new FormControl(''),
      tag: new FormControl(''),
    })
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }
    const selectedUser: Address = {
      name: this.addUserForm.value.name,
      createdBy: this.addUserForm.value.createdBy,
      createdOn: this.addUserForm.value.createdOn,
      version: this.addUserForm.value.version,
      lifeCycle: this.addUserForm.value.lifeCycle,
      status: this.addUserForm.value.status,
      language: this.addUserForm.value.language,
      readyForPublish: this.addUserForm.value.readyForPublish,
      bookmarksEdited: this.addUserForm.value.bookmarksEdited,
      tag: this.addUserForm.value.tag
    };
    this.usersService.addUser(selectedUser);
    this.addUserForm.reset();
    this.router.navigateByUrl('/templates');
  }

  updateUser() {
    this.addUserForm.markAllAsTouched();
    if (this.addUserForm.invalid) {
      return;
    }
    this.usersService.allUsers?.splice(this.selectedUserIndex, 1, this.addUserForm.value);
    this.router.navigate(['/templates']);
  }
}
