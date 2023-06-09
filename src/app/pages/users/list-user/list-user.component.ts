import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {

  users: any[] = [];
  currentPage = 1;
  totalPages: number[] = [];

  constructor(private http: HttpClient,
              private usersService: UsersService) {
    this.getUsers(this.currentPage);
  }

  getUsers(page: number) {
    this.http.get(`https://reqres.in/api/users?page=${page}`)
      .subscribe((response: any) => {
        this.users = response.data;
        this.totalPages = Array.from({ length: response.total_pages }, (_, index) => index + 1);
      });

  }

  getPage(page: number) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this.getUsers(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getUsers(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.getUsers(this.currentPage);
    }
  }

  public delete(index: number) {
    this.users.splice(index, 1);
  }

}
