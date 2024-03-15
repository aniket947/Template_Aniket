import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { Address } from '../../../models/template';
import { Subscription } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-templates-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private usersService: UsersService,
  ) { }
  displayedColumns: string[] = ['name', 'createdBy', 'Region', 'language', 'createdOn', 'action'];
  allUserSubs: Subscription | undefined;
  dataSourceList: any = [];
  selectedRows: any[] = [];

  @ViewChild(MatTable) table: MatTable<any> | undefined;

  ngOnInit() {
    if (this.usersService.isReload) {
      this.allUserSubs = this.usersService.getAllUsers().subscribe((resUserData: Address[]) => {
        this.usersService.allUsers = resUserData;
        this.reloadUserList();
        this.usersService.isReload = false;
      });
    } else {
      this.reloadUserList();
    }
  }

  reloadUserList() {
    this.dataSourceList = this.usersService.allUsers;
    this.table?.renderRows();
  }

  selectRow(row: any) {
    const index = this.selectedRows.indexOf(row);
    if (index > -1) {
      this.selectedRows.splice(index, 1);
    } else {
      this.selectedRows.push(row);
    }
  }

  isSelected(row: any): boolean {
    return this.selectedRows.indexOf(row) > -1;
  }
  deleteTemplate(position: number) {
    this.usersService.allUsers?.splice(position, 1);
    this.reloadUserList();
  }

  editTemplate(positionData: number) {
    this.usersService.selectedUserIndex = positionData;
    this.router.navigate(['/templates/add-edit-template']);
  }

  createTemplate() {
    this.usersService.selectedUserIndex = -1;
    this.router.navigate(['/templates/add-edit-template']);
  }

  ngOnDestroy() {
    this.allUserSubs?.unsubscribe();
  }
}