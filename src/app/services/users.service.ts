import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public perPage = 6;

  constructor(protected  http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    return (this.http.get(`${environment.apiLink}/users?page=${page}&par_page=${this.perPage}`)) as Observable<any>;
  }
}
